import React from 'react'
import './Experience.css'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandMongodb } from "react-icons/tb";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
       <h2>My Experience</h2>

       <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <FaHtml5 className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <IoLogoCss3 className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <IoLogoJavascript className='experience__details-icon'/>
            <div>
            <h4>Java Script</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <FaBootstrap className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <RiTailwindCssFill className='experience__details-icon'/>
           <div>
           <h4>Tailwind</h4>
           <small className='text-light'>Experienced</small>
           </div>
            </article>

            <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <IoLogoNodejs className='experience__details-icon'/>
            <div>
            <h4>Node js</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <FaPhp className='experience__details-icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <GrMysql className='experience__details-icon'/>
            <div>
            <h4>Mysql</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiOutlinePython className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <TbBrandMongodb className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            
          </div>

        </div>
       </div>

    </section>
  )
}

export default Experience
