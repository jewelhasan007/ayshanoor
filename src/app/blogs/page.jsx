"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import { Slide, SlideshowRef  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const amI = [
    {id:1, "title":"About Us", "description1":"Welcome to Beauty Care n Tips – Your Daily Dose of Natural Beauty Wisdom!","description2":"At Beauty Care n Tips, we believe beauty is not just about products—it’s about self-care, confidence, and embracing your natural glow. Our mission is simple: to empower individuals of all ages to look and feel their best with easy, affordable, and practical beauty tips that fit into everyday life.", "image": './about us.jpg' },
    {id:2, "title":"Who We Are", "description1":"We’re a passionate team of beauty enthusiasts, skincare advisors, and lifestyle writers who are committed to bringing you the latest trends, expert advice, and time-tested home remedies. Whether you’re looking for skin care solutions, hair care guides, or natural DIY beauty tips, we’ve got you covered.Best Organic Beauty Care Products in the USA","description2":"", "image": './who.jpg' },
    {id:3, "title":"What We Share", "description1":"1. Natural & DIY Beauty Remedies","description2":"2. Makeup Tutorials & Product Reviews","description3":"3. Skincare Routines for All Skin Types","description4":"4. Hair Care Tips & Styling Ideas","description5":"5. Self-Care & Confidence Boosting Advice", "image": './share.jpg' },
    {id:4, "title":"Why Choose Us?", "description1":"We understand that beauty isn’t one-size-fits-all. Our content is honest, research-based, and tailored for real people with real needs—from teenagers to busy moms to anyone wanting a little beauty boost.","description2":"We don’t promote unrealistic standards—we promote self-love, self-expression, and self-care.", "image": './chose.jpg' },
    
]

  //  const images = [
  //       "./blog1.jpg",
  //       "./blog2.jpg",
  //       "./blog3.jpg",
  //  ]

const page = () => {

      const slideRef = useRef(null)
    return (
      
          <div  className='mt-3 '>
           
<div className='flex justify-between items-center'>
  <div className='w-1/7'><Image className='p-3' src="/blog logo.jpg" width={150} height={150} alt='banner image'></Image></div>
     <div className='w-6/7'> <h1 className='text-4xl font-bold text-start text-pink-400'>Blogs</h1></div>

</div>
{/* <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide> */}

<Slide  autoplay={true} duration={3000} transitionDuration={500} infinite={true} indicators={true} ref={slideRef} className=' m-3'>
                <div style={{ autoplay: 'true', textAlign: 'center', background: 'url(./blog1.jpg)', padding: '200px 0', fontSize: '30px'}}></div>
                <div style={{autoplay: 'true', textAlign: 'center', background: 'url(./blog2.jpg)', padding: '200px 0', fontSize: '30px'}}></div>
                <div style={{autoplay: 'true', textAlign: 'center', background: 'url(./blog3.jpg)', padding: '200px 0', fontSize: '30px'}}></div>
                <div style={{autoplay: 'true', textAlign: 'center', background: 'url(./blog1.jpg)', padding: '200px 0', fontSize: '30px'}}></div>
            </Slide>
          

<div className='grid lg:grid-cols-3 lg:place-items-center gap-10 m-3 p-3'>
             {
            amI.map((item)=>(

                 <div key={item.id} className="card bg-base-100 w-96 shadow-sm  min-h-[400px] shadow-indigo-500/50 ">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl"
      width='150px'
      height='150px' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-blue-600 font-bold">{item.title}</h2>
    <p className='text-justify'>{item.description1}</p>
    <p className='text-justify'>{item.description2}</p>
    <p className='text-justify'>{item.description3}</p>
    <p className='text-justify'>{item.description4}</p>
    <p className='text-justify'>{item.description5}</p>

  </div>
</div>
            ))
           }
           </div>


           <div className='text-center'>
            <h1 className='font-bold text-4xl text-blue-700'>Join Our Journey!</h1>
           <h5 className='lg:px-[300px] text-center'>Explore, learn, and grow with us as we unlock the secrets to effortless beauty. 💕
Stay tuned, stay glowing, and don’t forget—<span className='font-bold'>your natural beauty is your superpower!</span></h5>
           </div>
           <div className='text-center py-5 text-pink-200'>
            <h1 className='font-bold text-4xl'>With love,</h1>
            <h1 className='font-bold text-4xl'>The Beauty Care n Tips Team</h1>
           
           </div>
          </div>
     
    );
};

export default page;