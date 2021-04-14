import React from 'react';
import { Input } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './login.css';

const IconFont = createFromIconfontCN({
  scriptUrl:'//at.alicdn.com/t/font_2487842_uleaa2uzsw.js',
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      prime: 'inline',
      login: 'none',
      register: 'none',
    }
  }
  toLogin = () => {
    this.setState({login: 'inline'});
    this.setState({prime: 'none'});
    this.setState({register: 'none'});
    console.log(this.state.login)
  }
  toRrgister = () =>{
    this.setState({login: 'none'});
    this.setState({prime: 'none'});
    this.setState({register: 'inline'});
  }
  render(){
    return (
      <div className="login">
        <div className="prime" style={{display:this.state.prime}}>
          <div className="primeHeader">Welcome</div>
          <div className="primeFooter">
            <div 
              className="loginButton" 
              onClick={this.toLogin.bind()}
              style={{transform: ['translate(-50%,400%)'],color: '#FFFFFF',backgroundColor: '#015266'}}
            >登陆</div>
            <div 
              className="loginButton" 
              onClick={this.toRrgister.bind()}
              style={{transform: ['translate(-50%,530%)'],color: '#015266',backgroundColor: '#FFFFFF'}}
            >注册</div>
          </div>
        </div>
        <div className="login-c" style={{display:this.state.login}}>
          <div className="primeFooter">
            <div className="primeHeader2" style={{fontSize: '25px',top: '10%',color: '#015266',zIndex: '2'}}>欢迎回来</div>
            <div className="loginForm">
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input 
                  bordered={false} 
                  size="large" 
                  prefix={<IconFont type="icon-ic_user_platform" style={{fontSize: '25px',color: '#015266'}} />}
                ></Input>
              </div>
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input 
                  bordered={false} 
                  size="large" 
                  prefix={<IconFont type="icon-mimajiesuo" style={{fontSize: '25px',color: '#015266'}} />}
                ></Input>
              </div>
              <div 
                className="loginButton" 
                style={{transform: ['translate(-50%,100%)'],color: '#FFFFFF',backgroundColor: '#015266'}}
              >登陆</div>
            </div>
          </div>
        </div>
        <div className="register" style={{display:this.state.register}}>
        <div className="primeFooter">
            <div className="primeHeader2" style={{fontSize: '25px',top: '10%',color: '#015266',zIndex: '2'}}>新用户？你好！</div>
            <div className="loginForm">
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input 
                  bordered={false} 
                  size="large" 
                  prefix={<IconFont type="icon-ic_user_platform" style={{fontSize: '25px',color: '#015266'}} />}
                ></Input>
              </div>
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input 
                  bordered={false} 
                  size="large" 
                  prefix={<IconFont type="icon-mimajiesuo" style={{fontSize: '25px',color: '#015266'}} />}
                ></Input>
              </div>
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input 
                  bordered={false} 
                  size="large" 
                  prefix={<IconFont type="icon-mimajiesuo" style={{fontSize: '25px',color: '#015266'}} />}
                ></Input>
              </div>
              <div 
                className="loginButton" 
                style={{transform: ['translate(-50%,100%)'],color: '#FFFFFF',backgroundColor: '#015266'}}
              >注册</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;