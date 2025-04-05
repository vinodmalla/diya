import React from 'react'
import  Image  from '../Education.jpg'

export default function Education() {
  return (
    <div>
    <div className='p-4 flex justify-center'>
      <h1 className='font-bold text-4xl m-4'>Empowering Dreams Through Education</h1>
    </div>
    <div className='flex justify-center'>
      <img src={Image} className='w-72 md:w-1/2 h-auto rounded-lg' alt="Mission Tatra" />
    </div>
    <div className='flex justify-center p-4 mx-auto m-4 py-4 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
      <p className='text-justify'>
      At Diya Helping Hands, we believe that education is the most powerful tool to change the world.
       Meet Chamundeswari, a bright and determined 16-year-old girl who recently completed her 10th standard. 
       Coming from a background where opportunities were limited, she now dreams big — and we are here to walk that path with her.
      We are committed to supporting children like Chamundeswari, who possess the will to learn but lack the means.
       Through sponsorships, mentorship, and emotional support, we ensure that deserving students are given every chance to rise and shine. 
       Because every child deserves a future filled with possibilities — not limitations.

      </p>
    </div>
  </div>
  )
}
