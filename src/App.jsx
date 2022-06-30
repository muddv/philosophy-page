import React from 'react'
import { Route, Switch } from "wouter";
import MainPage from './MainPage';
import Sources from './Sources'
import About from './About';

export default function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path="/">
        <MainPage></MainPage>
        </Route>
        <Route path="/sources">
          <Sources></Sources>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </div>
  )
}
