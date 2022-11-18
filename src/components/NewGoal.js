import React, { useState } from 'react';

export default function NewGoal( {title, total, inputHandler, handleSubmit} ) {

  return (
    <>
    <section>
      <h2>Завести цель</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} placeholder="Цель" onChange={inputHandler}/>
      <input type="text" name="total" value={total} placeholder="Сумма" pattern="[0-9]+" onChange={inputHandler}/>
      <button>Создать цель</button>
      </form>
    
    </section>
    </>
  )
}
