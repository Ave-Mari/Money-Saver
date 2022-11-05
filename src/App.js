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

  return (
    <>   
    <main>
  
  <section className="route">
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />}/>
      <Route path="goals-list" element={<GoalsList />}/>
      <Route path="new-goal" element={<NewGoal />}/>
      <Route path="*" element={ <NotFound /> }/>
      </Route>
    </Routes>
  </section>

   
    
    </main>
    </>
  )
}


'https://v5.reactrouter.com/web/guides/quick-start'
