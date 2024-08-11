import React, { useEffect } from 'react';
import "../Components/Eye.css";
import LocomotiveScroll from 'locomotive-scroll';

const Eye = () => {
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <div data-scroll-container>
      <div className="eyediv container" data-scroll data-scroll-speed={0.1}>
        <img src="https://th.bing.com/th/id/R.6b4ceafb8bd00f88202c95da8901b43f?rik=iXaUWnAjZ8AQOg&pid=ImgRaw&r=0" alt="Eye" />
        <div className="ballsdiv">
          <div className="balls">
            <p className="balls1"></p>
            <p className="balls2"></p>
            <p className="balls3"></p>
          </div>
        </div>
        <div className="ballsdiv">
          <div className="ball">
            <p className="balls1"></p>
            <p className="balls2"></p>
            <p className="balls3"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
