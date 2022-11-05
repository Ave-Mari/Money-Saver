import React from 'react';
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <header className="header">  
    <h1>Копилка 💰</h1> 
    <Link to="/">Главная</Link>
    <Link to="goals-list">Мои цели</Link>
    <Link to="new-goal">Завести новую цель</Link>
    </header>

    <Outlet />
    </>
  )
}
