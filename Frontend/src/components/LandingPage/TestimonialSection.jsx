import React from 'react'
import TestimonialCard from './TestimonialCard'
import "./TestimonialSection.css"

function TestimonialSection() {
  return (
    <div className='testimonialSection'>
    <h1><span>What our </span> client says </h1>
    <div className='testimonialSection-cards'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
    </div>
    </div>
  )
}

export default TestimonialSection
