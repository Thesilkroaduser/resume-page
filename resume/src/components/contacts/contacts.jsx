import React from "react";
import { useSelector } from 'react-redux';
import './contacts.scss';
import AOS from 'aos';
import linkedIn_icon from '../../assets/linkedin.svg';
import tg_icon from '../../assets/telegram.svg';
AOS.init();

const Contacts = () => {
  const language = useSelector(state => state.language);
  return(
    <section className="contacts" id="contacts">
      <div>
        <p>{`${language[0] === 'ru' ? 'Почта:' : 'Email:'} `}sergei_klimov_1998@mail.ru</p>
        <p>{`${language[0] === 'ru' ? 'Телефон:' : 'Mobile:'} `}+375 (29) 574-24-84</p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/sergei-klimov-1445aa1b5/" target="_blank" rel="noreferrer">
          <img className="icon linkedin" src={linkedIn_icon} alt="linkedin" />
        </a>
        <a href="https://t.me/natakatama" target="_blank" rel="noreferrer">
          <img className="icon" src={tg_icon} alt="telegram" /></a>
      </div>
    </section>
 )
}

export default Contacts;