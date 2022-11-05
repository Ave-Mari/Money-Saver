import React, { useState } from 'react';

export default function NewGoal( { }) {

  const [goal, setGoal] = useState({
    title: '',
    total: ''
  })

  const [goalsList, setGoalsList] = useState([]);

  
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setGoal({...goal, [name]:value});
    //console.log(goal);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.title && goal.total) {
      const newGoal = {...goal, id: new Date().valueOf() };
      setGoalsList([...goalsList, newGoal]);
      setGoal({title: '', total: ''});
      console.log(goalsList)
    }
  }

  return (
    <>
    <section>
      <h2>Завести цель</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={goal.title} placeholder="Цель" onChange={inputHandler}/>
      <input type="text" name="total" value={goal.total} placeholder="Сумма" onChange={inputHandler}/>
      <button>Создать цель</button>
      </form>
    
    </section>
    </>
  )
}
