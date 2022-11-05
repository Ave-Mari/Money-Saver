import React from 'react';
import NewGoal from './NewGoal';
import GoalItem from './GoalItem';

export default function GoalsList( {goalsList} ) {

  return (
    goalsList.map((item) => {
      const {title, total, id} = item;
      return(
        <ul key={id}>
          <li>
          <GoalItem item={item}/>
          </li>
        </ul>
      )
    })
          
  )
}
