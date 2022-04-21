import React from 'react'

const Description = () => {
    return (

        <section id="Description">

        <div className="section__description">

          <div className="testimonial__left">
              
            <h1 className="section__description--header">
            Choosing a course just got <span className="purple"> easier</span></h1>
            <h2 className="section__description--para">
            Its not just about finding the best course for you, its figuring out the ones to avoid. Read student reviews and testimonies for all courses that you can study.
            </h2>

          </div>

          <figure className="testimonial__right">
            <img src="/assets/Laptop.svg" className="testimonial__img" />
          </figure>

        </div>
      </section>
        
    )
}

export default Description;
