import React from "react";
import { useSelector } from 'react-redux';
import './experience.scss';
import AOS from 'aos';
AOS.init();

const Experience = () => {
  const language = useSelector(state => state.language);
  const sectionSettings = {
    armedForcesJob: language[0] === 'ru' ? 'Специалист по работе с информацией' : 'Information Specialist',
    armedForcesPeriod: language[0] === 'ru' ? 'Вооруженые Силы РБ | июль 2020 г. - август 2020 г.' : 'Armed Forces of the Republic of Belarus | July 2020 - August2020',
    armedForcesDeal1: language[0] === 'ru' ? 'Сбор, обработка и анализ данных' : 'Collection, processing and analysis of data',
    armedForcesDeal2: language[0] === 'ru' ? 'Переводческая дестельность' : 'Translation activity',
    organizationJob:  language[0] === 'ru' ? 'Тестировщик' : 'Junior Software Testing Engineer',
    organizationPeriod: language[0] === 'ru' ? 'EPAM SYSTEMS | Сентябрь 2020 г. - ноябрь 2020 г.' : 'EPAM SYSTEMS | September 2020 - November 2020',
    organizationActivity: language[0] === 'ru' ? 'Тестирование обучающих программ Up Skill Lab' : 'Testing training programs Up Skill Lab',
  };
  return(
    <section className="experience" id="experience">
      <div className="experience_item item1" data-aos="fade-right">
        <h2 className="subtitle">{sectionSettings.armedForcesJob}</h2>
        <h3 className="organization">{sectionSettings.armedForcesPeriod}</h3>
        <ul className="subcontent">
          <li>{sectionSettings.armedForcesDeal1}</li>
          <li>{sectionSettings.armedForcesDeal2}</li>
        </ul>
      </div>
      <div className="experience_item" data-aos="fade-right" data-aos-delay="200">
        <h2 className="subtitle">{sectionSettings.organizationJob}</h2>
        <h3 className="organization">{sectionSettings.organizationPeriod}</h3>
        <ul className="subcontent">
          <li>{sectionSettings.organizationActivity}</li>
        </ul>
      </div>
    </section>
  )
}

export default Experience;