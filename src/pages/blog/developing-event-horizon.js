import React from 'react'
import Layout from "../../components/Layout/Layout"
import CalendarIcon from "../../components/CalendarIcon/CalendarIcon"
import * as styles from "./blog-post.module.css"

export default function BlogPostDevelopingEventHorizon() {
  return (
    <Layout>
        <article className={styles.blogPost}>
          <div className="wrapper">
            <div className={styles.blogWrapper}>
              <header className={styles.blogPostHeader}>
                <h1>  
                  Journeying Beyond Stereo: Developing Event Horizon
                </h1>
                <div className={styles.blogPostDate}>
                  <CalendarIcon />
                  <p>16/06/2021</p>
                </div>
                <img className={styles.blogPostCoverImage} src="/event-horizon-cover-image.jpg" alt="Audio Plugin Event Horizon" />
              </header>
              <main className={styles.blogPostMain}>
                <section>
                  <h2>Introduction</h2>
                  <p>Stereo-widening has become an increasingly ubiquitous effect, earning its place as a valuable tool in the arsenal of audio effects used by music producers and mixing engineers alike. With the development of Event Horizon, I aim to unpack one of the fundamental principles classically used to achieve stereo-widening: mid-side processing. This blog aims to break down my audio plugin development approach for Event Horizon and hopefully provides a comprehensive guide to the application design process and algorithms constructed for the project. For the project, I used the JUCE framework with the IDE Xcode.</p>
                </section>
                <section>
                  <h3>Mid-Side Processing</h3>
                  <p>Mid-side processing affords the ability to address the mid and side portions of a stereo signal using simple encoding and decoding calculations. Historically this processing technique has been used with mid-side and other spatial microphone arrays, but can also be derived digitally from stereo audio. In a basic mid-side recording array, the middle signal is obtained from a single unidirectional microphone, often using a cardioid polar pattern, facing toward the front and centre of the audio event. The side signal is obtained from a bidirectional microphone oriented laterally, with the positive lobe facing left by convention. Here is a diagram of this particular configuration:</p>
                  <img src="/mid-side-processing-image.jpg" alt="Mid-Side Processing Diagram" />
                  <p>The typical matrixing that occurs in a Digital Audio Workstation involves 3 channels, where the 90 degree left facing bidirectional microphone is panned hard left for the left side portion of the array, the middle unidirectional microphone provides the centre image as a mono render of the recorded event and the bidirectional recording is inverted in polarity and panned hard right for the right side portion of the array. To recreate this effect digitally using stereo audio input, an encoding process is involved to derive the middle and side signals:</p>
                  <ul>
                    <li>Middle = Left + Right</li>
                    <li>Side = Left – Right</li>
                  </ul>
                  <p>Note that as a mono representation of the stereo audio signal, the middle signal contains all original pressure information contained within the stereo signal, but now devoid of the spatial information provided by the stereo input. Also, from my understanding, because the phase correlations between the left and right stereo channels are compounded, the middle signal contains en emphasised centre image. On the other hand, the side signal is extracted from stereo audio by eliminating the similarities and correlations in phase between the left and right channels. This results in the elimination of the centre image, only leaving the side portions of the signal. To interpret the changes made to the middle and side signals, a decoding process is required, which, much like the encoding process performs two simple calculations, this time resulting in a left and right channel for stereo output:</p>
                  <ul>
                    <li>Left = Middle + Side</li>
                    <li>Right = Middle – Side</li>
                  </ul>
                  <p>Where the middle signal is added to the side signal to obtain the left channel information as the left channel was subtracted from the right channel, where the left spatial information is considered to the positive lobe. This is also why the side signal is subtracted from the middle signal, being the equivalent to adding the reversed polarity of the left positive bidirectional lobe to the middle signal for the DAW matrixing example above. In theory, no signal loss occurs when decoding back to stereo (Roginska, 2017).</p>
                </section>
                <section>
                  <h2>DSP for Mid-Side Encoding</h2>
                  <p>Rather than looping through each channel one at a time, I stored the left (channelLeft) and right (channelRight) stereo channels in separate local variables to interleave them. I constructed an encoding algorithm for the middle signal which sums the left and right floating point values from the audio channel buffers. These floating points are multiplied by 0.5 to halve the signal strength so that equivalent output gain to the input gain is achieved when this middle signal is recombined with the side signal during the decoding process. This calculation is then multiplied by the current lMidParameter value to inform the amplitude strength of the middle signal. Here is the coded implementation of this middle signal encoding:</p>
                  <img src="/mid-parameter-code.jpg" alt="C++ Code for Mid Signal" />
                  <p>To encode the side signal, the left sample point value is extracted from the buffer using the sample for loop and is subtracted from the right sample point value also extracted from the buffer within this sample for loop. This value is then multiplied by 0.5 to equate the original input signal strength when recombined with the middle signal during the decoding process. This calculation is then finally multiplied by the current lSideParameter value to inform the amplitude strength of the side signal. Here is the coded implementation of this side signal encoding:</p>
                  <img src="/side-parameter-code.jpg" alt="C++ Code for Side Signal" />
                </section>
                <section>
                  <h2>DSP for Mid-Side Decoding</h2>
                  <p>As seen in the code above, the encoding calculations performed to extract the middle signal and the side signal are stored in float variables – midParameter for the middle signal encode and sideParameter for the side signal encode. The encoding process has been defined, but has not yet been implemented. This implementation process occurs in the decoding process where the sample point values extracted by the sample for loop from the left and right channel are assigned to these midParameter and sideParameter variables as part of the decoding calculation:</p>
                  <img src="/mid-side-decode-code.jpg" alt="C++ Code for Mid-Side Decode Algorithm" />
                </section>
              </main>
            </div>
          </div>
        </article>
    </Layout>
  )
}
