import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/login';
import privateRoutes from './routes/private'
import AuthRoute from './routes/AuthRoute'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        {privateRoutes.map(
          (route) => <AuthRoute key={route.path} {...route}/>
        )}
      </Switch>
    </Router>
  );
}

export default App;