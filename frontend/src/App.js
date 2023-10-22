import React from 'react'
import Head from './components/common/heading/Head'
import './App.css'
import { BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Header from './components/common/heading/Header'
import Home from './components/home/Home'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App