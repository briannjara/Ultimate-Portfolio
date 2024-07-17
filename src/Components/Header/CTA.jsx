import React from 'react'




const variants ={
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren: 0.1,
    },
  },
}

const CTA = () => {
  return (
    <div className='cta'>
        <a href="" className='btn'>Download CV</a>   
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>   
    </div>
  )
}

export default CTA
