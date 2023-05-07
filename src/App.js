import React from 'react'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import CreateClient from './components/Createclient'
import EditClient from './components/Editclient'
import ClientList from './components/ListClient'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />          
          <Route path="/create-client" component={CreateClient} />
          <Route path="/edit-client/:id" component={EditClient} />
          <Route path="/client-list" component={ClientList} />
        </Switch>
      </Router>
    </div>
  )
}

export default withRouter(App)
