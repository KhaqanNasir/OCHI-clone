import React, { useEffect } from 'react'
import "../Components/Projects.css";
import LocomotiveScroll from 'locomotive-scroll';

const Projects = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => locomotiveScroll.destroy();
  }, []);

  
  return (
    <div data-scroll-container>
    <div className="projectbg" data-scroll data-scroll-speed={0.2}>
      <p className="projectheading">Featured projects</p>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="projectbox col-6">
            <span className='span'>
            <p className='dot'></p>
            <p className='dottext'>FYDE</p>
            </span>
            <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'></img>
            {["AUDIT", "COPY WRITING", "SALES DECK", "SLIDES DESIGN"].map((item ,key)=>{
              return(
                <a key={key} className='projecttags'>{item}</a>
              )
            })}
            <div className="innertext">
              <p>FYDE</p>
            </div>
          </div>
          <div className="projectbox col-6">
            <span className='span'>
            <p className='dot'></p>
            <p className='dottext'>VISE</p>
            </span>
            <img src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
            {["AGENCY", "COMPANY PRESENTATION"].map((item ,key)=>{
              return(
                <a key={key} className='projecttags'>{item}</a>
              )
            })}
          </div>

          <div className="projectbox col-6">
            <span className='span'>
            <p className='dot'></p>
            <p className='dottext'>TRAWA</p>
            </span>
            <img src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg'></img>
            {["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"].map((item ,key)=>{
              return(
                <a key={key} className='projecttags'>{item}</a>
              )
            })}
            <div className="innertext">
              <p>TRAWA</p>
            </div>
          </div>

          <div className="projectbox col-6">
            <span className='span'>
            <p className='dot'></p>
            <p className='dottext'>PREMIUM BLEND</p>
            </span>
            <img src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png'></img>
            {["BRANDED TEMPELATE"].map((item ,key)=>{
              return(
                <a key={key} className='projecttags'>{item}</a>
              )
            })}
          </div>
          <div className="col-12 aboutdiv4 LG">
          <button>VIEW ALL CASE STUDIES  <i class="ri-arrow-right-up-line"></i></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
