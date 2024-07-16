import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    img: IMG1,
    title: 'Project Title 1',
    github: 'https://github.com/briannjara',
    demo: 'https://github.com/briannjara'
  },

  {
    id: 2,
    img: IMG2,
    title: 'Project Title 2',
    github: 'https://github.com/briannjara',
    demo: 'https://github.com/briannjara'
  },

  {
    id: 3,
    img: IMG3,
    title: 'Project Title 3',
    github: 'https://github.com/briannjara',
    demo: 'https://github.com/briannjara'
  },

  {
    id: 4,
    img: IMG4,
    title: 'Project Title 4',
    github: 'https://github.com/briannjara',
    demo: 'https://github.com/briannjara'
  },

  {
    id: 5,
    img: IMG5,
    title: 'Project Title 5',
    github: 'https://github.com/briannjara',
    demo: 'https://github.com/briannjara'
  },

  {
    id: 6,
    img: IMG6,
    title: 'Project Title 6',
    github: 'https://github.com/briannjara',
    demo: 'https://github.com/briannjara'
  },
]








const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id, img, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
              <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
                <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio
