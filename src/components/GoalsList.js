import React from 'react';
import NewGoal from './NewGoal';
import GoalItem from './GoalItem';




export default function GoalsList( { goalsList, addMoney, removeItem }) { 

  
   return (
    goalsList.map((item) => {
      const {title, total, id} = item;
      return (
          <ul  key={id}>          
            <GoalItem 
            total={total}
            title={title}
            addMoney={addMoney}
            removeItem={removeItem}
            id={id}
              />      
          </ul>
      )
      
    })
   )
   
  

}

