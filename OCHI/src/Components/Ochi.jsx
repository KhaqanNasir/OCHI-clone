import React, { useEffect } from 'react'
import "../Components/Ochi.css";
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Ochi = () => {
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => locomotiveScroll.destroy();
  }, []);
  useGSAP(()=>{
    gsap.to(".ochiTEXT" , {
      x: '-100%', 
      duration: 8,
      repeat: -1, 
      ease: 'linear', 
      from: { x: '100%' }
    })
  })
  return (
   
    <>
       <div data-scroll-container>
       <div className="ochibg " data-scroll data-scroll-speed={0.1}>
       <h1 className='ochiTEXT'>WE ARE OCHI</h1>
       <h1 className='ochiTEXT'>WE ARE OCHI</h1>
       <h1 className='ochiTEXT'>WE ARE OCHI</h1>
       </div>
       </div>
     
    </>
  )
}

export default Ochi;
