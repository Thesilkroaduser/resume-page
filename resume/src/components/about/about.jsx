import React from 'react';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import './about.scss';
AOS.init();

const About = () => {
  const language = useSelector(state => state.language);
  const sectionSettings = {
    titleAbout: language[0] === 'ru' ? 'о себе' : 'about',
    titleEducation: language[0] === 'ru' ? 'образование' : 'education',
    description: language[0] === 'ru' ? 'Внимательный, ответственный и самоорганизованный. Всегда стараюсь выполнять поставленные задачи в полном объеме и всрок, а нестандартное мышление и креативный подход помогают мне выбрать верное направление в их решении' : 'Attentive, responsible and self-organized. I always try to complete the assigned tasks in full and on time. Thinking outside the box and a creative approach help me choose the right direction in solving them',
    universityTitle: language[0] === 'ru' ? 'Белорусский государственный университет' : 'Belarusian State University',
    organizationTitle: language[0] === 'ru' ? 'Up Skill Lab (EPAM SYSTEMS)' : 'Up Skill Lab (EPAM SYSTEMS)',
    specialization: language[0] === 'ru' ? 'Специалист по международным отношениям. Переводчик-референт (арабский и английский языки)' : 'Specialist in international relations. Translator-assistant (Arabic and English)',
    courseDescription: language[0] === 'ru' ? 'Курс по Frontend разработке' : 'Frontend Development'
  }
  return(
    <section className="about" id="about">
      <div className="description" data-aos="fade-right">
        <h2 className="subtitle">{sectionSettings.titleAbout}</h2>
        <p className="content">{sectionSettings.description}</p>
      </div>
      <div className="education" data-aos="fade-right" data-aos-delay="200">
        <h2 className="subtitle">{sectionSettings.titleEducation}</h2>
        <h3 className="organization">{sectionSettings.universityTitle}</h3>
        <p className="content">{sectionSettings.specialization}</p>
        <h3 className="organization">{sectionSettings.organizationTitle}</h3>
        <p className="content">{sectionSettings.courseDescription}</p>
      </div>
    </section>
  )
}

export default About;