import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './../main.css';



export default function Layout({goalsList}) {

  const lengthSpan = goalsList.length > 0 ? goalsList.length : '';
  return (
    <>
    <header className="header">  
    <h1>Копилка 💰</h1> 
    <Link to="/">Главная</Link>
    <Link to="goals-list">Мои цели <span className="list-number">{lengthSpan}</span></Link>
    <Link to="new-goal">Завести новую цель</Link>
    </header>

    <Outlet />
    </>
  )
}
