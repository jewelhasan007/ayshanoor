"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tools from './Tools';
import { TypeAnimation } from 'react-type-animation';


const HomePage = () => {
  
const text = "At My Site, I am a local business that specializes in providing top-notch SEO services to help improve your online presence. I offer a range of services including On-page SEO, Off-page SEO, Technical SEO, Local SEO, Monthly SEO, and E-commerce SEO, as well as Google Analytics and Google Search Console setup. My goal is to help you achieve a first-page ranking on Google and increase your online visibility. Contact me today to learn more"

    return (
        <div>
       {/* Title  */}
            <div className='md:flex bg-gray-100'>
                                   
                <div className='m-5 space-y-5 px-5 bg-white border rounded-2xl'>    
               
                <Image src="/banner-photo.jpg" width={300} height={300} alt='banner image'></Image>
               <div className='text-center bg-white'>
                 <h1 className='text-2xl'>Hello, I'm Aysha Noor Tithi</h1>
                <h5>Social Media Manager</h5>
                <p className='font-bold'>BANGLADESH</p>
               </div>
               </div>
            <div className='w-full flex flex-col items-center justify-center space-y-4 m-2 bg-white rounded-md'>
                <div className=' rounded-md w-full text-start p-4  bg-white'>
                    <h1 className='text-3xl  text-blue-400 text-justify'>{text}</h1>
                </div>
              
            </div>
           
            </div>
        </div>
    );
};

export default HomePage;