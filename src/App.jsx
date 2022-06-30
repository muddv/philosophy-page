import React from 'react'
import { Route, Switch } from "wouter";
import MainPage from './MainPage';
import Sources from './Sources'

export default function App() {
  return (
    <div className='App'>
      <MainPage></MainPage>
      <Switch>
        <Route path="/sources">
          <Sources></Sources>
        </Route>
      </Switch>
    </div>
  )
}
