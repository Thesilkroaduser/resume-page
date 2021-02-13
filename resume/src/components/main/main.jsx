import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import AOS from 'aos';
import Typed from 'typed.js';
import './main.scss';
import photo from '../../assets/photo.jpg';
AOS.init();

const Main = () => {
  const language = useSelector(state => state.language);

  useEffect(() => {
    const russianGreeting = 'Привет, я Сергей, начинающий <span class="js">JavaScript</span> &amp; <span class="react">React</span> разработчик';

    const englishGreeting = "Hi, I'm Sergey, a beginner <span class='js'>JavaScript</span> &amp; <span class='react'>React</span> Software Engineer";
    
    const options = {
        strings: [language[0] === 'ru' ? russianGreeting : englishGreeting],
        typeSpeed: 50
    };
    const typed = new Typed('.greeting', options);

    return () => {
        typed.destroy();
    };
  });

  return(
    <section className="main-page" id="main">
      <div className="greeting" data-aos="fade-right" />
      <img className="photo" src={photo} alt="portrait" data-aos="zoom-in"></img>
      <button className="scroll-down" type="button" />
    </section>
  );
}

export default Main;