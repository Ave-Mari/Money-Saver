import React, { useState, useEffect } from 'react';
import NewGoal from './NewGoal';





export default function GoalItem( { id, total, title, addMoney, removeItem } ) {

      return (
    <>
     <li className='goal-item'>
      <button
      onClick={removeItem}
      >✖</button>
        <p>Моя цель: {title}</p>
        <p>Осталось собрать: {total}₽</p>
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
