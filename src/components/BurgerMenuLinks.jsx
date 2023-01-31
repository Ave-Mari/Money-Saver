import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './../main.css';

export default function BurgerMenuLinks({ goalsList, closeMobileNav, langChange }) {

    const lengthSpan = goalsList.length > 0 ? goalsList.length : '0';

    
  return (
    <nav className='nav'>
      <button 
      onClick={closeMobileNav}
      className='close-nav'>
        ✖
        </button>
    <Link to="/">Главная</Link>
      <Link to="goals-list">Мои цели <span className={goalsList.length ? "list-number" : "list-number-zero"}>{lengthSpan}</span></Link>
      <Link to="new-goal">Завести новую цель</Link>
      <div className='lang-btns-mobile'>
      <button onClick={(e) => langChange(e)} value="ru">🇷🇺</button>
      <button onClick={(e) => langChange(e)} value="eng">🇬🇧</button>
    </div>
    </nav>
  )
}
