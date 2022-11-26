import React, { useState, useEffect } from 'react';
import NewGoal from './NewGoal';





export default function GoalItem( { 
  id,
  total, 
  title, 
  addMoney, 
  removeItem, 
  yourTotal, 
  addYourTotal,
  yourTotalHandler
  } ) {

    const [input, setInput] = useState(false);
  

      return (
    <>
     <li className='goal-item'>      
      <button className='remove-goal-btn'
      onClick={() => removeItem(id)}
      >✖</button>
        <p className='goal'>Моя цель: <span className='goal-span'>{title}</span> </p>
        <p className='total'>Осталось собрать:  <span className='goal-span'>{
        total > 0 ? total : '0'
        }
        ₽
        </span></p>
        {
          Number(total) > 0 ?

          <div className='add-block'>
        <p className='add-text'>Добавить: </p>
        {
          input ?
          <div className="total-input">
          <input 
          type="text"
          value={yourTotal}
          onChange={(e) => yourTotalHandler(e)}
          />
        </div>
        :
      <div className='total-btns'>
        <input 
       className='add-money-btn'
       type="button"
       value={1000}
       onClick={(e) => addMoney(id, total, e)}
       />
        <input 
       className='add-money-btn'
       type="button"
       value={5000}
       onClick={(e) => addMoney(id, total, e)}
       />
        <input 
       className='add-money-btn'
       type="button"
       value={10000}
       onClick={(e) => addMoney(id, total, e)}
       />
        </div>
        }
        <input 
       className='add-money-btn'
       style={{width: '32px'}}
       type="button"
       value={input ? '✓' : '+'}
       onClick={(e) => {
        setInput(true);
        if (input) {
          addYourTotal(id, total, yourTotal, e, input);
          setInput(false);
         } 
         
       }}
       />
        </div>
        :
        <div>ВЫ НАКОПИЛИ ДЕНЕЖКИ!!! ПОЗДРАВЛЯЮЮЮ!!</div>

          
        }
        
       


    </li>
    </>
  )
}
