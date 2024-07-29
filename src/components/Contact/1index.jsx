"use client"

import { useEffect, useState } from "react";
// import sendEmail from "../services/sendEmails";
// import styles from "@styles/Contact.module.css"
// import useDataContext from "../context/Context";
// import linkedin from "../../public/assets/icons/linkedin.png"
// import github from "../../public/assets/icons/github.png"
// import telegram from "../../public/assets/icons/telegram.png"


export const Contact = () => {
  // const { ptbr } = useDataContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState("");
  const [display, setDisplay] = useState("none");
  
  const handleSubmit = async (event) => { 
    event.preventDefault();
    
    const payload = { name, email, message };
    const response = await sendEmail(payload);
    setSent(response)

    setName("");
    setEmail("");
    setMessage("");

    displayModal()
  };

  const displayModal = () => {
    setDisplay("flex");
    setTimeout(()=> {
      setDisplay("none")
      setSent("")
  },2500)
  }

  return (
      <section  id="contact">
        <h2>Contato</h2>
          <div >
            <form onSubmit={handleSubmit} method="POST">
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <textarea
                id="message"
                rows="5"
                placeholder="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
            <div 
              style={{ display: display }}
              >
                <p>{sent}</p>
            </div>
          </div>
      </section>
  );
}