import React, { useState } from 'react'
import * as styles from './DownloadsModal.module.css'

export default function DownloadsModal({ onClose, downloadURL }) {
  
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
      console.log("Form successfully submitted");
      window.location.href = downloadURL;
      onClose();
    })
    .catch((error) => alert(error));
  }
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose}>X</button>
        <h3>Please Enter Your Email for Download</h3>
        <form 
        onSubmit={handleSubmit} 
        className={styles.emailForm}
        name="emailData"
        data-netlify="true">
          <input type="hidden" name="form-name" value="emailData" />
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email*'
            id={styles.email}
            required/>
          <div>
            <input
              type="checkbox"
              name="checkbox"
              className={styles.checkbox}
              id="marketingCheckbox"
              required/>
            <label htmlFor="marketingCheckbox">
              I agree to receive marketing communications from Plux
            </label>
          </div>
          <p>
            You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
          </p>
          <button className="buttonStyle buttonDark" type="submit">
            <span>Download</span>
          </button>
        </form>
      </div>
    </div>
  )
}
