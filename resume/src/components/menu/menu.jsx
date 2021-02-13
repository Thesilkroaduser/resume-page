import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './menu.scss';

const Menu = () => {
  const language = useSelector(state => state.language, shallowEqual);
  const menuSetting = {
    main: language[0] === 'ru' ? 'главная' : 'main',
    about: language[0] === 'ru' ? 'О себе' : 'about',
    skills: language[0] === 'ru' ? 'Навыки' : 'skills',
    experience: language[0] === 'ru' ? 'Опыт работы' : 'experience',
    contacts: language[0] === 'ru' ? 'Контакты' : 'contacts',
  };
  const dispatch = useDispatch();
  const toggleLanguage = () => {
    return {
      type: 'TOGGLE'
    }
  }

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="list_item"><a className="link" href="#main">{ menuSetting.main }</a></li>
        <li className="list_item"><a className="link" href="#about">{ menuSetting.about }</a></li>
        <li className="list_item"><a className="link" href="#experience">{ menuSetting.experience }</a></li>
        <li className="list_item"><a className="link" href="#skills">{ menuSetting.skills }</a></li>
        <li className="list_item"><a className="link" href="#contacts">{ menuSetting.contacts }</a></li>
      </ul>
      <button className="language" onClick={() => {dispatch(toggleLanguage())}}>{language[1]}</button>
    </nav>
  )
}

export default Menu;