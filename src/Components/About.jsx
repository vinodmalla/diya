import React, { useState, useEffect } from 'react';
import img1 from "../Image[1].jpg";
import img2 from "../Image[2].jpg";
import img3 from "../Image[3].jpg";
import img4 from "../Image[4].jpg";
import img5 from "../Image[5].jpg";

export default function About() {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full px-4">
      <h1 className="text-black text-2xl md:text-4xl font-bold flex justify-center m-4">About Us</h1>

      <div className="flex justify-center">
  <div className="relative m-10 z-10 w-full max-w-[90vw] md:max-w-[60vw] lg:max-w-[50vw] aspect-[16/9] overflow-hidden">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        className={`absolute inset-0 w-full h-auto object-contain transition-opacity duration-1000 ${
          index === currentImage ? 'opacity-100' : 'opacity-0'
        }`}
        alt={`Slide ${index + 1}`}
      />
    ))}
  </div>
</div>

      <div className="p-4 mx-auto max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
        <p className="text-justify">
          Diya Helping Hands Charitable Trust is a symbol of love, kindness, and hope, dedicated to bringing light into the lives of those in need. 
          Like a diya (lamp) that shines even in the darkest times, we stand as a source of guidance, warmth, and positivity for the underprivileged. 
          Through selfless service and unwavering support, we extend our hands to lift others, believing that even the smallest act of kindness can spark a great change.
        </p>
      </div>

      {/* Our Mission Section */}
      <h1 className="text-black text-2xl md:text-4xl font-bold flex justify-center m-4">Our Mission</h1>
      <div className="flex justify-center">
        <img className="p-4 md:p-8 w-full max-w-[300px] md:max-w-[500px]" src={img4} alt="Mission Logo" />
      </div>

      <div className="p-4 mx-auto max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
        <p className="text-justify">
          At Diya Helping Hands, we are devoted to kindling hope and fostering resilience in those who need it most. 
          Our mission is to illuminate lives with the tools of education, the solace of healthcare, and the strength of empowerment, while nurturing a sustainable future. 
          With every step, we aim to replace despair with possibility, isolation with community, and hardship with opportunity.
        </p>
      </div>

      {/* Our Vision Section */}
      <h1 className="text-black text-2xl md:text-4xl font-bold flex justify-center m-4">Our Vision</h1>
      <div className="flex justify-center">
        <img className="p-4 md:p-8 w-full max-w-[300px] md:max-w-[500px]" src={img5} alt="Vision Logo" />
      </div>

      <div className="p-4 mx-auto max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
        <p className="text-justify">
          We envision an India where every soul shines with potential, unshackled by circumstance. 
          Diya Helping Hands aspires to build a nation of empowered individuals—sustained by quality education, fortified by accessible healthcare, and embraced by a thriving environment. 
          We dream of a collective of changemakers, united in spirit and action, turning compassion into a movement that redefines lives.
        </p>
      </div>
    </div>
  );
}
