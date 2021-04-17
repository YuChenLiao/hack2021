import React from 'react';
import { Button, Avatar, message } from 'antd';
import { UserOutlined, EditFilled } from '@ant-design/icons';
import {Arequest} from '../service/request'
import 'antd/dist/antd.css';
import './userPage.css';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      userName:'这里的接口也有亿点小问题',
      activeDays: 0,
      activeNum: 0,
    }
  }
  componentDidMount() {
    this.initData();
  }
  initData = async() => {
    const token = localStorage.getItem('token');
    const res = await Arequest.post(
      '/getUserActive?token='+token,
      {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
    );
    if(res.data.success) {
      this.setState({
        avatar: res.data.data.avatar,
        userName: res.data.data.userName,
        activeDays: res.data.data.activeDays,
        activeNum: res.data.data.activeNum,
      });
    } else message.error('请求失败');
  }
  logout = () => {
    localStorage.clear('token');
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="userMain">
        <div className="headPic">
          <img alt="头图" src="/img/userHead.gif" className="headImg"></img>
        </div>
        <div className="userItem">
          <div className="avatar">
            <Avatar size={64} icon={<UserOutlined />} shape="square" />
          </div>
          <div className="userName">
            {this.state.userName}
            <span style={{marginLeft: '15px'}}><EditFilled style={{color: '#000'}} /></span>
          </div>
          <div className="itemList">
            <div className="showData">
              <div className="dataSpan">{this.state.activeDays}</div>
              <div className="dataSpan">{this.state.activeNum}</div>
            </div>
            <Button shape="round" size="large" className="logOut" onClick={this.logout.bind()}>退出登录</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default UserPage;