import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container-hero">
          <div className="row hero-text">
            <h1>Get A <span>TUTOR</span> TODAY!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque placeat modi accusamus quam voluptates fuga cupiditate. Iste inventore amet a nostrum, accusantium, officia dolores accusamus vitae, ullam non quae?</p>
            <div className="button">
              <button className="primary-btn">
                GET A TUTOR <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="primary-btn">
                SUBJECTS <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero