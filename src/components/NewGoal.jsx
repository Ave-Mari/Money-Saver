import React, { useState } from "react";

export default function NewGoal( { title, total, inputHandler, handleSubmit, isRussian } ) {
 
  return (
    <>
    <section className='new-goal-section'>
      <h2>
        {isRussian ? 'Завести цель' : 'New Goal'}        
        </h2>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="title" id="title-label">
        <input id="title-input" type="text" name="title" value={title} placeholder={isRussian ? 'Ваша цель' : 'Your Goal'} onChange={inputHandler}/>
          </label>              
      <label htmlFor="total" id="total-label">
      <input id="total-input" type="text" name="total" value={total} placeholder={isRussian ? 'Сумма' : 'Amount'} pattern="[0-9]+" onChange={inputHandler}/>
        </label>
        <div className="currency-radio-btns">
      <div className="radio">
         <input
          value='₽'
          onChange={inputHandler}
          id="currency-1"
          name="currency"
          type="radio"
          />
         <label htmlFor="currency-1" className="radio-label">₽</label>
       </div>
       <div className="radio">
         <input
          value='$'
          onChange={inputHandler}
          id="currency-2"
          name="currency"
          type="radio"
          />
         <label htmlFor="currency-2" className="radio-label">$</label>
       </div>
        </div>     
      <button>
      {isRussian ? 'Создать цель' : 'Create Goal'}       
        </button>
      </form>    
    </section>
    </>
  )
}
