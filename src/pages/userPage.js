import React from 'react';
import { Button, Avatar } from 'antd';
import { UserOutlined, EditFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './userPage.css';

function UserPage() {
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
          咸
          <span style={{marginLeft: '15px'}}><EditFilled style={{color: '#000'}} /></span>
        </div>
        <div className="itemList">
          <div className="showData">
            <div className="dataSpan">nnn</div>
            <div className="dataSpan">nnn</div>
          </div>
          <Button shape="round" size="large" className="logOut">退出登录</Button>
        </div>
      </div>
    </div>
  )
}

export default UserPage;