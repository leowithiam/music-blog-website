import React from 'react'
import Layout from "../../components/Layout/Layout"
import CalendarIcon from "../../components/CalendarIcon/CalendarIcon"
import * as styles from "./blog-post.module.css"

export default function BlogPostDevelopingFrostByte() {
    return (
      <Layout>
          <article className={styles.blogPost}>
            <div className="wrapper">
                <div className={styles.blogWrapper}>
                    <header className={styles.blogPostHeader}>
                        <h1>
                            FrostByte Unveiled: Crafting Planewaves in a 3D Audio World
                        </h1>
                        <div className={styles.blogPostDate}>
                            <CalendarIcon />
                            <p>30/09/2021</p>
                        </div>
                        <img className={styles.blogPostCoverImage} src="/frostbyte-cover-image.jpg" alt="Audio Plugin FrostByte" />
                    </header>
                    <main className={styles.blogPostMain}>
                        <section>
                            <p>
                                With the development of FrostByte, I sought to further my learning within the field of audio programming and spatial audio by tackling Ambisonic plugin development. Whilst this felt like a big shift in complexity, the previous research conducted on mid-side processing provided a strong backbone, solidifying a basic intuition for constructing channel matrices algorithms.
                            </p>
                            <p>
                                I confronted academic literature regarding various Ambisonic encoding and decoding methods to understand the underlying theory involved, applied this theory through the construction of Ambisonic Digital Signal Processing (DSP) algorithms within several basic plugins, deepened my understanding of scalable and efficient code design through the use of more sophisticated object-oriented programming (OOP) concepts and furthered my knowledge of the JUCE framework to build more professional and aesthetically designed Graphical User Interfaces (GUIs) to develop FrostByte.
                            </p>
                        </section>
                        <section>
                            <h2>Design Brief</h2>
                            <h3>Functionality</h3>
                            <h4>Digital Signal Processing</h4>
                            <ul>
                                <li>Conditional statements in the AudioProcessor that allow the use of one DSP decoding/output algorithm at a time</li>
                                <li>Mono planewave encoding to FOA AmbiX DSP algorithm</li>
                                <li>FOA AmbiX to Blumlein mid-side stereo decoding DSP algorithm</li>
                                <li>FOA AmbiX to Blumlein crossed pair stereo decoding algorithm</li>
                                <li>Additional FOA AmbiX output option</li>
                            </ul>
                            <h4>Parameters</h4>
                            <ul>
                                <li>A parameter which is assigned the current state of the decode menu to trigger the correct conditional statement for the matched decode DSP algorithm</li>
                                <li>Parameters to contain and apply the values from the azimuth and elevation sliders to the respective DSP algorithms in the mono planewave encode state</li>
                                <li>Parameters to contain and and apply the values from the width and elevation sliders to the respective DSP algorithms in the stereo planewave encode state</li>
                            </ul>
                            <h3>Features</h3>
                            <h4>Menus</h4>
                            <ul>
                                <li>One independently addressable drop down menu from which the user can select the decode/output options available.</li>
                                <li>The decode menu defaults to the mid-side decode and provides a drop down when clicked from which the crossed pair decode and an AmbiX output mode can be selected.</li>
                            </ul>
                            <h4>Mono encoding</h4>
                            <ul>
                                <li>Two addressable rotary sliders which link to the azimuth and elevation parameters in the audio engine thread.</li>
                                <li>Units displayed in degrees (°) to provide a more intuitive representation of the rotation angle.</li>
                                <li>A range of 180° of rotation left and right on the azimuth plane</li>
                                <li>A range of 180° of rotation up and down on the elevation plane</li>
                                <li>A visual top-down representation of the mono encoded planewave on the surface of the Ambisonic isotropic sphere.</li>
                            </ul>
                        </section>
                        <section>
                            <h2>Ambisonic Mono Planewave Encoding</h2>
                            <p>Planewave encoding represents a sound source at an infinite distance to emulate a straight wavefront from a defined direction. This being the real world implication or manifestation of this encoding process, and in practice allows direct point source control in terms of azimuth and elevation placement of a sound point source along the surface of the isotropic Ambisonic sphere.</p>
                            <p>The following planewave encoding method I found within Lossius’s and Anderson’s (2014) paper, which elaborates upon the encoding calculations used by their ATK Reaper plugin suite. Here are the parameters are considered:</p>
                            <ul>
                                <li>Gain – g</li>
                                <li>Azimuth – θ</li>
                                <li>Elevation – ϕ</li>
                                <li>Directness – γ</li>
                            </ul>
                            <p>These parameters are incorporated in the following matrix for FuMa B-Format encoding:</p>
                            <img src="/fuma-encoding-image.jpg" alt="FuMa B-Format Encoding Matrix Formula"/>
                            <p>In the equations provided in Lossius’s and Anderson’s paper, the azimuth of the source is represented as θ, and elevation as ϕ. It would be these values I allow the user to alter in a planewave encoding plugin that provides the ability to change the placement of a point source across the surface of the Ambisonic isotropic sphere.</p>
                        </section>
                        <section>
                            <h2>Ambisonic Pantophonic Stereo Decoding</h2>
                            <p>Using only 2 output channels and a gain matrix, stereo decoding methods unfortunately do not provide a lossless conversion from the periphonic soundfield representation possible in the Ambisonic domain. Only spatialisation on the azimuth plane is represented, with the Z component in FuMa, or the ACN2 channel in AmbiX not incorporated in the decoding matrix. This type of spatial representation is also known as a pantophonic soundfield. Note however, that this type of decoding has a very high compatibility with stereo speaker playback!</p>
                            <h3>Blumlein Stereo Pantophonic Decode</h3>
                            <p>One such stereo decoding method is the Mid-Side decode, where a mono signal is used with the mid-side matrix, here a mid and side signal are extracted from the 4 FOA channels. In FuMa notation, the W and X component are combined in a calculation to provide the mid signal (this includes a weighting of 1/√2 for the W component), and the Y component is extracted as the side signal. The side signal is then added to the mid signal to provide the left channel information, and taken away from the mid signal to provide the right channel information. Here is this decoding matrix illustrated as pseudo code:</p>
                            <img src="/blumlein-mid-side-image.jpg" alt="Blumlein Mid-Side Stereo Decode Formula" />
                            <p>This decode method provides a very literal pantophonic representation of the Ambisonic soundfield.</p>
                            <h3>Blumlein Crossed Pair Decode</h3>
                            <p>To provide additional stereo decoding functionality, I also looked into the Blumlein Cross Pair or X/Y decode for FOA. The matrix for this decode operates in a slightly different manner compared to the mid-side decode, using only the X and Y components in FuMa notation. The X component representing the intensity and proximity of the sound whilst Y accounts for the lateral placement of the sound. Here is this decoding matrix illustrated as pseudo code:</p>
                            <img src="/blumlein-crossed-pair-image.jpg" alt="Blumlein Crossed Pair Decode Formula" />
                            <p>I believe this type of decoding method would be more appropriate for the static placement of stereo sources, whilst the mid-side decode seems more favourable to create dynamic lateral movement for mono sources.</p>
                        </section>
                    </main>
                </div>
            </div>
          </article>
      </Layout>
    )
  }
