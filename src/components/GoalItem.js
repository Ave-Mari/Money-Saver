import React, { useState, useEffect } from 'react';
import NewGoal from './NewGoal';





export default function GoalItem( { id, total, title, addMoney, removeItem } ) {

      return (
    <>
     <li className='goal-item'>
      <button className='remove-goal-btn'
      onClick={() => removeItem(id)}
      >✖</button>
        <p>Моя цель: <span className='goal-span'>{title}</span> </p>
        <p>Осталось собрать:  <span className='goal-span'>{total}₽</span></p>
        <input 
       type="button"
       value={1000}
       onClick={(e) => addMoney(id, total, e)}
       />
        <input 
       type="button"
       value={5000}
       onClick={(e) => addMoney(id, total, e)}
       />
        <input 
       type="button"
       value={10000}
       onClick={(e) => addMoney(id, total, e)}
       />


    </li>
    </>
  )
}
