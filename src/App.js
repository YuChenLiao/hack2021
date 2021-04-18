import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/login';
import privateRoutes from './routes/private'
import AuthRoute from './routes/AuthRoute'
import { createFromIconfontCN } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import './app.css'

const IconFont = createFromIconfontCN({
  scriptUrl:'//at.alicdn.com/t/font_2487842_1vkrzldtkno.js',
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFooter: 'none',
      color1: '#FFFFFF',
      color2: '#FFFFFF',
      color3: '#FFFFFF',
    }
  }
  componentDidMount() {
    if (window.location.pathname !== '/') {
      this.setState({
        showFooter: 'inline',
        color2: '#7DCCCB'
      }); 
    } else {this.setState({showFooter: 'none'})}
    if (window.location.pathname === '/mianPage') {
      this.setState({
        color1: '#7DCCCB',
        color2: '#FFFFFF',
        color3: '#FFFFFF',
      })
    }
    else if(window.location.pathname === '/firstPage') {
      this.setState({
        color2: '#7DCCCB',
        color1: '#FFFFFF',
        color3: '#FFFFFF',
      })
    }
    else if(window.location.pathname === '/userPage')
      this.setState({
        color3: '#7DCCCB',
        color2: '#FFFFFF',
        color1: '#FFFFFF',
      })
  }
  showPath = () => {
    console.log(window.location.pathname);
  }
  toCalendar = () => {
    this.setState({
      color1: '#7DCCCB',
      color2: '#FFFFFF',
      color3: '#FFFFFF',
    })
  }
  toFirst = () => {
    this.setState({
      color2: '#7DCCCB',
      color1: '#FFFFFF',
      color3: '#FFFFFF',
    })
  }
  toUser = () => {
    this.setState({
      color3: '#7DCCCB',
      color2: '#FFFFFF',
      color1: '#FFFFFF',
    })
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={Login}/>
            {privateRoutes.map(
              (route) => <AuthRoute key={route.path} {...route}/>
            )}
          </Switch>
          <div className="footer" style={{display: this.state.showFooter}}>
            <div className="footerSpan" onClick={this.toCalendar.bind()}>
              <Link to='/mainPage'>
                <IconFont type="icon-rili" style={{fontSize: '32px',color: this.state.color1}} />
              </Link>
            </div>
            <div className="footerSpan" onClick={this.toFirst.bind()}>
              <Link to='/firstPage'>
                <IconFont type="icon-eye" style={{fontSize: '30px',color: this.state.color2}} />
              </Link>
            </div>
            <div className="footerSpan" onClick={this.toUser.bind()}>
              <Link to='/userPage'>
                <IconFont type="icon-yonghu" style={{fontSize: '25px',color: this.state.color3}} />
              </Link>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;