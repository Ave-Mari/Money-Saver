import React, { useState } from 'react';

export default function NewGoal( {title, total, inputHandler, handleSubmit} ) {

  return (
    <>
    <section className='new-goal-section'>
      <h2>Завести цель</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label for="title" id="title-label">
        {/* <span class="label-span">Ваша цель: </span> */}
        <input id="title-input" type="text" name="title" value={title} placeholder="Ваша цель" onChange={inputHandler}/>
          </label>        
      
      <label for="total" id="total-label">
      {/* <span class="label-span">Сумма: </span> */}
      <input id="total-input" type="text" name="total" value={total} placeholder="Сумма" pattern="[0-9]+" onChange={inputHandler}/>
        </label>
      
      <button>Создать цель</button>
      </form>
    
    </section>
    </>
  )
}
