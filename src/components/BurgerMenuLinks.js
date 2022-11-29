import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function BurgerMenuLinks({ goalsList }) {

    const lengthSpan = goalsList.length > 0 ? goalsList.length : '0';

    
  return (
    <nav>
    <Link to="/">Главная</Link>
      <Link to="goals-list">Мои цели <span className={goalsList.length ? "list-number" : "list-number-zero"}>{lengthSpan}</span></Link>
      <Link to="new-goal">Завести новую цель</Link>
    </nav>
  )
}
