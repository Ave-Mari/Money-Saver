import React from 'react';
import NewGoal from './NewGoal';

export default function GoalItem(goalsList) {
  return (
    <>
    <section className='goal-item'>
        <p>Моя цель {goalsList.title}</p>
        <p>Осталось собрать: {goalsList.total}</p>
        <button>+ 1000₽</button>
        <button>+ 5000₽</button>
        <button>+ 10000₽</button>
    </section>
    </>
  )
}
