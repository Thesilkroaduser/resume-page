import React from "react";
import './skills.scss';
import AOS from 'aos';
AOS.init();

const Skills = () => {
 return(
   <section className="skills" id="skills">
     <div className="skills-row1">
      <span className="skills__item" data-aos="flip-left">html</span>
      <span className="skills__item" data-aos="flip-left" data-aos-delay="100">css</span>
      <span className="skills__item" data-aos="flip-left" data-aos-delay="150">JavaScript</span>
      <span className="skills__item" data-aos="flip-left" data-aos-delay="200">sass</span>
     </div>
     <div className="skills-row2">
      <span className="skills__item" data-aos="flip-left" data-aos-delay="250">react</span>
      <span className="skills__item" data-aos="flip-left" data-aos-delay="300">redux</span>
      <span className="skills__item" data-aos="flip-left" data-aos-delay="350">webpack</span>
      <span className="skills__item" data-aos="flip-left" data-aos-delay="400">git</span>
     </div>
     
   </section>
 )
}

export default Skills;