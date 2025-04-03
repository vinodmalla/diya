import React from 'react';
import logo from '../logo3.png';
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";  
import FacebookIcon from "@mui/icons-material/Facebook";


export default function Footer() {
  return (
    <div className='p-4 bg-slate-100 text-black flex flex-col items-center justify-between'>
      <div className='flex items-center'>
        <img className='w-36 md:w-48' src={logo} alt='diya' />
        <h6 className='font-bold ml-2 text-lg md:text-xl'>
          Diya Helping Hands <br/> Charitable Trust
        </h6>
      </div>
      <div className='flex gap-4 mt-4 text-2xl'>
        <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fdiyahelpinghandscharitabletrust%3Fmibextid%3DZbWKwL' target='_blank' rel='noopener noreferrer' className='hover:opacity-20'>
          <FacebookIcon />
        </a>
        <a href='https://www.instagram.com/diyahelpinghandscharitabletrus?igsh=MTBodnhqeWo2Nng4aA%3D%3D&utm_source=qr ' target='_blank' rel='noopener noreferrer' className='hover:opacity-20'>
         <InstagramIcon />
        </a>
        <a href='https://youtube.com/@diyahelpinghands?si=AD846vjrxkysHvTc' target='_blank' rel='noopener noreferrer' className='hover:opacity-20 '>
          <YouTubeIcon />
        </a>
      </div>

      <p className='mt-4 text-sm'>&copy; 2025 Diya Helping Hands. All Rights Reserved.</p>
    </div>
  );
}
