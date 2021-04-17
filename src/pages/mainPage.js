import React from 'react';
import { Calendar, List, Badge } from 'antd';
import moment from '../service/moment';
import 'antd/dist/antd.css';
import {Arequest} from '../service/request'
import Pop from '../component/pop'
import './mainPage.css'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      visible: false,
      setVisible: false,
      confirmLoading: false,
      dataList: [],
      dateList: [1,5,3,7,4]
    }
    this.initData();
  };

  initData = async() => {
    const res = await Arequest.get('/article/listArticle');
    if(res) {
      this.setState({dataList: res.data});
    }
  }
  onChange = (value) => {
    console.log(value._d);
    this.setState({visible: true});
  }

  showModal = () => {
    this.setState({visible: true});
  };

  handleOk = () => {
    this.setState({confirmLoading: true})
    setTimeout(() => {
      this.setState({visible: false});
      this.setState({confirmLoading: false})
    }, 1000);
  };

  handleCancel = () => {
    this.setState({visible: false});
  };

  showBadge = (value) => {
    let num = false;
    this.state.dateList.forEach((item) => {
      if(item === value.date())
        num = true;
    }) 
    return num ? (
      <Badge status="success" offset={[5, 0]} color="#015266" />
    ) : (
      <Badge status="success" offset={[5, 0]} color="#FFFFFF" />
    );
  }
  render() {     
    return (
      <div className="mainBox">
        <div className="clBox">
          <Calendar 
            fullscreen={false} 
            onSelect={this.onChange}
            headerRender={() => {
              let date =  moment();
              return (
                <div className="clHeader">{date.format('LL')}</div>
              )
            }}
            dateCellRender={this.showBadge}
          />
        </div>
        <Pop 
          visible={this.state.visible} 
          confirmLoading={this.state.confirmLoading}
          method={this}
        />
        <List>
        </List>
      </div>
    );
  } 
}

export default MainPage;
