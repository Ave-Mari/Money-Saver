import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './../main.css';

export default function BurgerMenuLinks({ isRussian, goalsList, closeMobileNav, langChange }) {

    const lengthSpan = goalsList.length > 0 ? goalsList.length : '0';

    
  return (
    <nav className='nav'>
      <button 
      onClick={closeMobileNav}
      className='close-nav'>
        ✖
        </button>
    <Link to="/">
    {isRussian ? "Главная" : "Home"}
      </Link>
      <Link to="goals-list">
      {isRussian ? "Мои цели " : "My Goals "}
      <span className={goalsList.length ? "list-number" : "list-number-zero"}>
        {lengthSpan}
        </span>
        </Link>
      <Link to="new-goal">
      {isRussian ? "Завести новую цель" : "New Goal"}
        </Link>
      <div className='lang-btns-mobile'>
      <button onClick={(e) => langChange(e)} value="ru">🇷🇺</button>
      <button onClick={(e) => langChange(e)} value="eng">🇺🇸</button>
    </div>
    </nav>
  )
}
