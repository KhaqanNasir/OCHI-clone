import React from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import "../Components/MainPage.css";
import 'remixicon/fonts/remixicon.css';
const MainPage = () => {
  useGSAP(()=>{
    gsap.from(".mainimg",{
         x:-100,
         delay:1.5,
         duration:0.5,
         opacity:0,
         
    })
  })
  return (
    <>
    <div className="WholeMain container">
      <div className="row">
      <div className="MainText">
        <p>WE CREATE</p>
        <span className='mainSPAN'>
          <div className="mainimg"></div>
          <p>EYE-OPENING</p>
        </span>
        <p>PRESENTATIONS</p>
      </div>
      </div>
    </div>
    <hr className='hrMain' />
    <div className="text2main">
      <p>For public and private companies</p>
      <p>From the first pitch to IPO</p>
      <span>
        <a>START THE PROJECT</a>
         <a><i class="ri-arrow-right-up-line"></i></a>
      </span>
    </div>
    </>
  )
}

export default MainPage
