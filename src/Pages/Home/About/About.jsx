import React from 'react'
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

function About() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-4 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold w-3/4">We are qualified & of experience in this field</h1>
                    <p className="py-6 w-3/4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 w-3/4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="text-white p-2 px-4 bg-orange-500 rounded hover:bg-orange-600">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default About