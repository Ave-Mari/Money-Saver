import React, {useState, useEffect, useContext, createContext} from "react";
import { Routes, Route, Link } from "react-router-dom";
import './main.css';
import GoalsList from './components/GoalsList.jsx'
import NewGoal from './components/NewGoal.jsx'
import HomePage from './components/HomePage.jsx'
import NotFound from './components/NotFound.jsx'
import Layout from "./components/Layout.jsx"


export default function App() {  
  const [goal, setGoal] = useState({
    title: '',
    currency: '',
    total: ''
  })

  const [goalsList, setGoalsList] = useState([]);

  const [yourTotal, setYourTotal] = useState(0);

  const [isRussian, setIsRussian] = useState(true);
  
  useEffect(() => {
    return document.title = "Money Saver"
 }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('LIST_OF_GOALS');
    setGoalsList(JSON.parse(data));
  }, [])

  useEffect(() => {
    window.localStorage.setItem('LIST_OF_GOALS', JSON.stringify(goalsList));
  }, [goalsList]);

 
  
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setGoal({...goal, [name]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.title && goal.total && goal.currency) {
      const newGoal = {...goal, id: new Date().valueOf()};
      setGoalsList([...goalsList, newGoal]);
      setGoal({title: '', total: '', currency: ''});
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

const removeItem = (id) => {
  const newGoalsList = goalsList.filter((i) => i.id !== id);
  setGoalsList(newGoalsList);
}

const yourTotalHandler = (e) => {
  const value = e.target.value;
  setYourTotal(value);
}

const addYourTotal = (id, total, yourTotal, e, input) => {
  goalsList.map((item) => {
   if (item.id === id) {
    if (yourTotal) {
      const totalNum =  Number(item.total);
      item.total = totalNum - yourTotal;
    }
   }
    return item;  
  });  
  setGoalsList([...goalsList]);
}

const langChange = (e) => {
  if (e.target.value === "ru") {
    setIsRussian(true);
  } else {
    setIsRussian(false);
  }
}


  return (
    <>   
    <main>
  
  <section className="route">
  <Routes>
    <Route path="/" element={
    <Layout 
    goalsList={goalsList}
    langChange={langChange}
    isRussian={isRussian}
    />}>
      <Route index element={<HomePage isRussian={isRussian}/>}/>
      <Route path="goals-list" element={
      <GoalsList 
      goal={goal}
      goalsList={goalsList}
      removeItem={removeItem}
      addMoney={addMoney}
      yourTotal={yourTotal}
      yourTotalHandler={yourTotalHandler}
      addYourTotal={addYourTotal}
      isRussian={isRussian}
      />
      }/>
      <Route path="new-goal" element={
      <NewGoal 
      inputHandler={inputHandler} 
      handleSubmit={handleSubmit} 
      isRussian={isRussian}
      title={goal.title} 
      total={goal.total}      
      />  
    
      }/>
      <Route path="*" element={ <NotFound isRussian={isRussian}/> }/>
      </Route>
    </Routes>
      </section>    
    </main>
    </>
  )
}

