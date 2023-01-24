import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import BurgerMenuLinks from './BurgerMenuLinks.jsx';
import Footer from './Footer.jsx';
import './../main.css';


export default function Layout({goalsList, langChange, isRussian}) {

  const [burgerMenu, setBurgerMenu] = useState(false);

  const lengthSpan = goalsList.length > 0 ? goalsList.length : '0';

  const closeMobileNav = (e) => {
    setBurgerMenu(false)
  }
  
  return (
    <>
    <header className="header">  
    <h1>
      {isRussian ? "Копилка 💰" : "Money Saver 💰"}
      </h1> 
    <div className='desktop-links'>
      <Link to="/">
        {isRussian ? "Главная" : "Home"}
        </Link>
      <Link to="goals-list">
      {isRussian ? "Мои цели " : "My Goals "}
         <span className={goalsList.length ? "list-number" : "list-number-zero"}>{lengthSpan}
        </span></Link>
      <Link to="new-goal">
      {isRussian ? "Завести новую цель" : "New Goal"}
        
        </Link>
     </div>
    <button className='hamburger-btn' onClick={() => setBurgerMenu(!burgerMenu)}>
    <a href="#" className='hamburger'>
       <span classname="hamburger-line"></span>
       <span classname="hamburger-line"></span>
       <span classname="hamburger-line"></span>
        </a>
    </button>
    <span className='lang-btns'>
      <button onClick={(e) => langChange(e)} value="ru">🇷🇺</button>
      <button onClick={(e) => langChange(e)} value="eng">🇬🇧</button>
    </span>
    </header>

    {burgerMenu ? 
    <BurgerMenuLinks 
    goalsList={goalsList} 
    closeMobileNav={closeMobileNav}
    /> : ''}
    <Outlet />

    <Footer />
   
    </>
  )
}
