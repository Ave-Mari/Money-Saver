import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import BurgerMenuLinks from './BurgerMenuLinks';
import Footer from './Footer';
import './../main.css';


export default function Layout({goalsList}) {

  const [burgerMenu, setBurgerMenu] = useState(false);

  const lengthSpan = goalsList.length > 0 ? goalsList.length : '0';
  
  return (
    <>
    <header className="header">  
    <h1>Копилка 💰</h1> 
    <div className='desktop-links'>
      <Link to="/">Главная</Link>
      <Link to="goals-list">Мои цели <span className={goalsList.length ? "list-number" : "list-number-zero"}>{lengthSpan}</span></Link>
      <Link to="new-goal">Завести новую цель</Link>
     </div>
    <button className='hamburger-btn' onClick={() => setBurgerMenu(!burgerMenu)}>
    <a href="#" className='hamburger'>
       <span classname="hamburger-line"></span>
       <span classname="hamburger-line"></span>
       <span classname="hamburger-line"></span>
        </a>
    </button>
    </header>

    {burgerMenu ? <BurgerMenuLinks goalsList={goalsList}/> : ''}
    <Outlet />

    <Footer />
   
    </>
  )
}
