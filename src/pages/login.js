import React from 'react';
import { Input, message } from 'antd';
import { createFromIconfontCN, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import {request} from '../component/request'
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
      registerPrime: 'inline',
      registerEnd: 'none',
      loginForm: {
        userName: '',
        passWord: '',
      },
    }
  };
  toLogin = () => {
    this.setState({login: 'inline'});
    this.setState({prime: 'none'});
    this.setState({register: 'none'});
    console.log(this.state.login)
  };
  toRrgister = () =>{
    this.setState({login: 'none'});
    this.setState({prime: 'none'});
    this.setState({register: 'inline'});
  };
  registerComplete = async() => {
    const res = await request.post('/register/account',this.state.loginForm);
    console.log(res.data);
    if(res.data.success) {
      this.setState({registerPrime: 'none'});
      this.setState({registerEnd: 'inline'});
    } else {
      message.error('注册失败');
    }
  };
  onChangeUser = ({ target: { value } }) => {
    this.setState({ loginForm:{
      userName: value,
      passWord: this.state.loginForm.passWord,
    } });
    console.log(this.state);
  };
  onChangePass = ({ target: { value } }) => {
    this.setState({ loginForm:{
      userName: this.state.loginForm.userName,
      passWord: value,
    } });
    console.log(this.state);
  };
  render(){
    const { userName, passWord} = this.state.loginForm;
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
                  placeholder="账号:"
                  prefix={<IconFont type="icon-ic_user_platform" style={{fontSize: '25px',color: '#015266'}} />}
                ></Input>
              </div>
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input.Password
                  bordered={false} 
                  size="large" 
                  placeholder="密码:"
                  prefix={<IconFont type="icon-mimajiesuo" style={{fontSize: '25px',color: '#015266'}} />}
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </div>
              <div 
                className="loginButton" 
                style={{transform: ['translate(-50%,100%)'],color: '#FFFFFF',backgroundColor: '#015266'}}
              >登陆</div>
              <div 
                style={{
                  color: '#015266',
                  borderBottomStyle: 'solid',
                  borderBottomColor: '#015266',
                  borderWidth: '1px',
                  position: 'absolute',
                  bottom: '-120%',
                  left: '50%',
                  transform: ['translate(-50%,0)'],
                  fontSize: '5px',
                  whiteSpace: 'nowrap'
                }}
                onClick={this.toRrgister.bind()}
              >还没有账号？这里注册</div>
            </div>
          </div>
        </div>
        <div className="register" style={{display:this.state.register}}>
          <div className="primeFooter" style={{display: this.state.registerPrime,transform:['translate(-50%,0%)']}}>
            <div 
              className="primeHeader2" 
              style={{fontSize: '25px',top: '10%',color: '#015266',zIndex: '2'}}
            >新用户？你好！</div>
            <div className="loginForm">
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input 
                  bordered={false} 
                  value={userName}
                  onChange={this.onChangeUser}
                  size="large" 
                  placeholder="用户名:"
                  prefix={<IconFont type="icon-ic_user_platform" style={{fontSize: '25px',color: '#015266'}} />}
                ></Input>
              </div>
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input.Password
                  bordered={false} 
                  value={passWord}
                  onChange={this.onChangePass}
                  size="large" 
                  placeholder="密码:"
                  prefix={<IconFont type="icon-mimajiesuo" style={{fontSize: '25px',color: '#015266'}} />}
                />
              </div>
              <div style={{borderBottomStyle: 'solid',borderBottomColor: '#CB5920',borderWidth: '2px',marginTop: '15px'}}>
                <Input.Password 
                  bordered={false} 
                  size="large" 
                  placeholder="重复密码:"
                  prefix={<IconFont type="icon-mimajiesuo" style={{fontSize: '25px',color: '#015266'}} />}
                />
              </div>
              <div 
                className="loginButton" 
                style={{transform: ['translate(-50%,100%)'],color: '#FFFFFF',backgroundColor: '#015266'}}
                onClick={this.registerComplete.bind()}
              >注册</div>
            </div>
          </div>
          <div className="registerEnd" style={{display: this.state.registerEnd}} onClick={this.toLogin.bind()}>
            <div className="complete"></div>
            <div style={{position: 'absolute',width:'100%',height: '30px',color: '#015266',top: '55%',fontSize: '25px'}}>注册完成</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;