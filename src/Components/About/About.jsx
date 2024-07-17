import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa6";
import { motion } from 'framer-motion';



const variants ={
  initial:{
    y:100,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
}









const About = () => {
  return (
    <motion.section id='about' variants={variants} initial="initial" whileInView="animate">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <motion.div className="container about__container" variants={variants} initial="initial" whileInView="animate">
        <div className="about__me">
        <div className="about__me-image" >
          <img src={ME}alt="" />
        </div>
        </div>
        

        <motion.div className="about__content" variants={variants} initial="initial" whileInView="animate">
          <motion.div className="about__cards" variants={variants} initial="initial" whileInView="animate">
            <motion.article className='about__card'  >
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </motion.article>

            <motion.article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Clients </small>
            </motion.article>

            <motion.article className='about__card' >
              <FaRegFolder className='about__icon' />
              <h5>Projects</h5>
              <small>80+ completed Projects</small>
            </motion.article>
          </motion.div >

          <motion.p variants={variants} initial="initial" whileInView="animate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur maiores id atque ipsa vel ab suscipit labore amet quasi molestiae architecto fugit, quod velit, a neque consequatur temporibus est?</motion.p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default About
