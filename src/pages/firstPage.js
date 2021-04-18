import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import {Arequest} from '../service/request'
import Pop from '../component/pop'
import './firstPage.css'
import moment from 'moment';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTips: 'none',
      visible: false,
      confirmLoading: false,
      showForm: {
        picUrl: '',
        picTxt: '',
        img:File,
        date: moment(),
      },
      textForm: {
        title: '',
        
      }
    }
  }
  componentDidMount() {
    this.initData();
  }

  initData = async() => {
    let res = await Arequest.get('/getRandPic');
    const pic = res.data.picUrl;
    const text = res.data.pic_text;
    this.setState({showForm: {
      picUrl: pic,
      picTxt: text,
    }})
  }
  
  onChange = () => {
    this.showModal();
  }

  showModal = () => {
    this.setState({visible:true});
  };
  handleOk = () => {
    this.setState({confirmLoading:true});
    setTimeout(() => {
      this.setState({visible:false});
      this.setState({confirmLoading:false});
    }, 2000);
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({visible:false});
  };
  changeTips = () => {
    this.setState({showTips: 'inline'});
  }
  changeTipsNone = () => {
    this.setState({showTips: 'none'});
  }
  render() {
    return (
      <div className="main">
        <div className="showPic">
          <img 
            alt="预览" 
            src={this.state.showForm.picUrl} 
            className="pic" 
            onMouseEnter={this.changeTips} 
            onMouseLeave={this.changeTipsNone}
          ></img>
          <div className="tip" style={{display: this.state.showTips}}>
            {this.state.showForm.picTxt}
          </div>
        </div>
        <Button 
          type="primary" 
          shape="round" 
          size="large"
          className="touch"
          onClick={this.onChange}
        >记录今日美好</Button>
        <Pop 
          visible={this.state.visible} 
          confirmLoading={this.state.confirmLoading}
          method={this}
        />
      </div>
    );
  }
}

export default FirstPage;