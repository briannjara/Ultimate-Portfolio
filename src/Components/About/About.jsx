import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa6";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME}alt="" />
        </div>
        </div>
        

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Clients </small>
            </article>

            <article className='about__card'>
              <FaRegFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur maiores id atque ipsa vel ab suscipit labore amet quasi molestiae architecto fugit, quod velit, a neque consequatur temporibus est?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
