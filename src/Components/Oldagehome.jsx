import React from 'react'
import Image from "../oldagehome.jpg" 

export default function Oldagehome() {
  return (
    <div>
          <div className='p-4 flex justify-center'>
            <h1 className='font-bold text-4xl m-4'>Where Love Lives: A Home for Our Forgotten Heroes</h1>
          </div>
          <div className='flex justify-center'>
            <img src={Image} className='w-72 md:w-1/2 h-auto rounded-lg' alt="Mission Tatra" />
          </div>
          <div className='flex justify-center p-4 mx-auto m-4 py-4 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
            <p className='text-justify'>
            At Diya Helping Hands Charitable Trust, we are committed to addressing critical community needs through impactful initiatives. One such effort is Mission Tatra, focused on resolving the severe water crisis in Tatra village.Established over 100 years ago, Tatra is home to approximately 400 residents. For a century, the village depended on a single well, dug by their ancestors, to meet their drinking and daily water needs. However, over the past 30 years, this well has dried up completely, leaving the community without a reliable water source. Today, villagers must travel 6 kilometers to a neighboring village’s water plant to fetch drinking water—a task made nearly impossible for families without able-bodied men, leaving women, elderly individuals, and children to bear the burden of this daily struggleWhile the government has installed a water tank in Tatra, the supply remains salty and unsuitable for consumption. At Diya, we are stepping in to enhance this initiative, ensuring access to clean, potable water for all. Our primary goals under Mission Tatra are:
    To resolve the drinking water crisis that has plagued Tatra for three decades.
    To establish a sustainable and effective drainage system for the village.
    We don’t just initiate change—we build on existing efforts, collaborating with government programs to create lasting solutions. Through Mission Tatra, we aim to restore dignity, health, and hope to the people of Tatra by securing their most basic need: water.
            </p>
          </div>
        </div>
  )
}
