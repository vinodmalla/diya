import React from 'react';
import logo from "../Orphanages.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";  
import FacebookIcon from "@mui/icons-material/Facebook";    
import { MailCheckIcon } from 'lucide-react';
import { ContactIcon } from 'lucide-react';
import { LocateFixedIcon } from 'lucide-react';


export default function Contact() {
  return (
    <div className="">
      <div className="grid place-items-center justify-center">
        <img className="m-4 w-96 md:w-auto rounded-lg" src={logo} alt="Diya Helping Hands Logo" />
      </div>

      <div className='text-justify  p-4 mx-auto m-4 py-4 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
        <p className="">  At <strong>Diya Helping Hands Charitable Trust</strong>, our mission is to spread love, kindness, and hope by providing education, healthcare, environmental sustainability, disaster relief, and empowerment to those in need. We are dedicated to uplifting underprivileged communities, helping them break free from economic limitations and live with dignity. Through selfless service and compassion, we strive to bring light in times of darkness, warmth where there is despair, and support where there is struggle. Together, we aim to create a world where kindness and generosity lead to lasting change.</p>
      </div>

      {/* Contact Info and Social Links in a Column */}
      <div className="grid place-items-center flex-col justify-center">
      <h1 className='m-8 font-bold text-justify text-2xl'>Contact Us</h1>
        <p className="m-4 p-4 text-gray-700 flex items-center ">
          <MailCheckIcon className="mr-4" />: diya@diyahelpinghandscharitabletrust.com  
        </p>
        <p className="m-4 p-4 text-gray-700 text-sm flex items-center">
          <LocateFixedIcon size={30} className="mr-2" />:HIG-11 BLOCK, HIG CHITRAPURI HILLS, Chitrapuri Colony, Hyderabad, Telangana 500089
        </p>
        <p className="m-4 p-4 text-gray-700 flex items-center">
          <ContactIcon  className="mr-2 " />: +91 9392932998
        </p>

        <h1 className='m-8 font-bold text-justify text-2xl'>Follow Us</h1>

        <div className="m-4 flex space-x-10">
          <a href='https://youtube.com/@diyahelpinghands?si=AD846vjrxkysHvTc' target='_blank' rel="noreferrer" className="text-gray-700 hover:text-green-400">
            <YouTubeIcon fontSize="large" />
          </a>
          <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fdiyahelpinghandscharitabletrust%3Fmibextid%3DZbWKwL' target='_blank' rel="noreferrer" className="text-gray-700 hover:text-green-400">
            <FacebookIcon fontSize="large" />
          </a>
          <a href='https://www.instagram.com/diyahelpinghandscharitabletrus?igsh=MTBodnhqeWo2Nng4aA%3D%3D&utm_source=qr ' target='_blank' rel="noreferrer" className="text-gray-700 hover:text-green-400">
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}
