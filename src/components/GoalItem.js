import React from 'react';
import NewGoal from './NewGoal';

export default function GoalItem({item}) {
  return (
    <>
    <section className='goal-item'>
        <p>Моя цель: {item.title}</p>
        <p>Осталось собрать: {item.total}</p>
        <button>+ 1000₽</button>
        <button>+ 5000₽</button>
        <button>+ 10000₽</button>
    </section>
    </>
  )
}
