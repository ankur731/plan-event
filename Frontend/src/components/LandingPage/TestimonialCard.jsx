import React from 'react'
import "./TestimonialCard.css"
import StarIcon from '@mui/icons-material/Star';

function TestimonialCard() {
  return (
    <div className='testimonialCard'>
        <div className='testimonialCardImg'>
          <img src={require("../../images/person.jpg")} alt="testimonial"/>
        </div>
        <h2>Ellison Berger</h2>
        <h4>Banglore</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc ex, maximus vel felis ut, vestibulumtristique enim. Proin nulla est. Maecenas tempor euismod </p>
        <div className='testimonials-stars'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />

        </div>
    </div>
  )
}

export default TestimonialCard
