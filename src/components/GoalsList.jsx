import React from 'react';
import NewGoal from './NewGoal.jsx';
import GoalItem from './GoalItem.jsx'




export default function GoalsList( { 
  goalsList, 
  addMoney, 
  removeItem, 
  yourTotal,
  yourTotalHandler,
  addYourTotal
}) { 
  return (
  <section className='goals-section'>

{
 
    goalsList.map((item) => {
      const {title, total, id} = item;
      return (
          <ul className="goals-list" key={id}>
            <GoalItem 
            total={total}
            title={title}
            addMoney={addMoney}
            removeItem={removeItem}
            yourTotal={yourTotal}
            id={id}
            yourTotalHandler={yourTotalHandler}
            addYourTotal={addYourTotal}
              />      
          </ul>
      )
      
    })
   
   }
  
   </section>
  )
}

