import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mainpage from './pages/mainPage';
import FirstPage from './pages/firstPage';
import UserPage from './pages/userPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/userPage" exact component={UserPage}/>
        <Route path="/mainPage" exact component={Mainpage}/>
        <Route path="/" component={FirstPage}/>
      </Switch>
    </Router>
  );
}

export default App;