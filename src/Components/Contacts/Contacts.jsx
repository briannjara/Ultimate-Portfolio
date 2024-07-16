import React from 'react'
import './Contacts.css'
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>briannjaramba8@gmail.com</h5>
            <a href="mailto:briannjaramba8@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+254 716 291 726</h5>
            <a href=" https://wa.me/254716291726" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <IoLogoInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>briannjaramba8@gmail.com</h5>
            <a href="https://instagram.com/njaram.ba" target='_blank'>Send a Message</a>
          </article>
          
        </div>

        <form>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Your Message" rows={7} required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>

          {/* <div className="contact__form-error">
            <p>There was an error sending your message.</p>
          </div> */}
          
        </form>





      </div>
  
    </section>
  )
}

export default Contact
