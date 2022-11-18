import React, {useState, useEffect} from "react";
//import { hot } from 'react-hot-loader/root';
import { Routes, Route, Link } from "react-router-dom";
import './main.css';
import GoalsList from './components/GoalsList'
import NewGoal from './components/NewGoal'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import Layout from "./components/Layout";




export default function App() {  
  const [goal, setGoal] = useState({
    title: '',
    total: ''
  })

  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    localStorage.setItem('goalsList', JSON.stringify(goalsList));
  }, [goalsList]);

  
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setGoal({...goal, [name]:value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.title && goal.total) {
      const newGoal = {...goal, id: new Date().valueOf()};
      setGoalsList([...goalsList, newGoal]);
      setGoal({title: '', total: ''});
    }
  }


  const addMoney = (id, total, e) => { 
    const value = e.target.value;
    goalsList.map((item) => {
    if (item.id === id) { 
      const totalNum =  Number(item.total);
       item.total = totalNum - value;
    }
    return item
    
   })
   setGoalsList([...goalsList]);
}

const removeItem = () => {

}


  return (
    <>   
    <main>
  
  <section className="route">
  <Routes>
    <Route path="/" element={
    <Layout 
    goalsList={goalsList}
    />}>
      <Route index element={<HomePage />}/>
      <Route path="goals-list" element={
      <GoalsList 
      goal={goal}
      goalsList={goalsList}
      removeItem={removeItem}
      addMoney={addMoney}
      />
      }/>
      <Route path="new-goal" element={
      <NewGoal 
      inputHandler={inputHandler} 
      handleSubmit={handleSubmit} 
      title={goal.title} 
      total={goal.total}
      />
      }/>
      <Route path="*" element={ <NotFound /> }/>
      </Route>
    </Routes>
  </section>

   
    
    </main>
    </>
  )
}

