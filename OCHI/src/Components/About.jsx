import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "../Components/About.css";

const About = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <div data-scroll-container>
      <div className="container-fluid" data-scroll data-scroll-speed={0.1}>
        <div className="row">
          <div className="aboutbg">
            <div className='aboutText'>
              Ochi is a strategic partner for fast-growing tech businesses that need to 
              <span className='underline'> raise funds, </span>
              <span className='underline'>sell products, </span>
              <span className='underline'>explain complex ideas, </span>and 
              <span className='underline'> hire great people.</span>
            </div>
            <hr />
            <div className="aboutdiv1">
              <p className='col-6'>What you can expect:</p>
              <div className="aboutdiv2 col-6">
                <p className='aboutp'>
                  We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.<br /><br />
                  We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                </p>
                <div className="aboutdiv3">
                  <p>S:</p>
                  {["Instagram", "Linkedin", "Facebook", "Behance"].map((item, key) => (
                    <a className='abttags' key={key}>{item}</a>
                  ))}
                </div>
              </div>
            </div>
            <br /><br />
            <hr />
            <div className="aboutmajor">
              <div className="aboutdiv4 col-6">
                <p>Our approach:</p>
                <button>READ MORE <i className="ri-arrow-right-up-line"></i></button>
              </div>
              <div className="aboutdiv5 col-6">
                <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' alt='Ochi Design'/>
              </div>
            </div>
            <br /><br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
