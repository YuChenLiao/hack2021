import React from 'react';
import { Button, Modal, Input, Upload } from 'antd';
import 'antd/dist/antd.css';
import {Arequest} from '../component/request'
import './firstPage.css'

const { TextArea } = Input;
class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTips: 'none',
      visible: false,
      setVisible: false,
      confirmLoading: false,
      setConfirmLoading: false,
      showForm: {
        picUrl: '',
        picTxt: '',
      },
    }
  }
  componentDidMount() {
    this.initData()
  }

  initData = async() => {
    let res = await Arequest.get('/getRandPic');
    console.log(res.data);
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
    console.log(this.state.showTips);
  }
  changeTipsNone = () => {
    this.setState({showTips: 'none'});
    console.log(this.state.showTips);
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
            {this.state.showForm.picTxt}1111
          </div>
        </div>
        <Button 
          type="primary" 
          shape="round" 
          size="large"
          className="touch"
          onClick={this.onChange}
        >记录今日美好</Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          okText="确定"
          cancelText="取消"
          bodyStyle={{backgroundColor: '#FFFFFF'}}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <div style={{backgroundColor: '#F9F9F9',borderRadius: '5px',marginTop: '20px'}}>
            <Input bordered={false} />
          </div>
          <div style={{backgroundColor: '#F9F9F9',borderRadius: '5px',marginTop: '20px'}}>
            <TextArea bordered={false} autoSize={{ minRows: 3, maxRows: 5 }}/>
          </div>
          <div style={{marginTop: '20px'}}>
            <Upload 
              style={{backgroundColor: '#F9F9F9',borderRadius: '5px',marginTop: '20px'}} 
              listType="picture-card"
            >上传图片</Upload>
          </div>
        </Modal>
      </div>
    );
  }
}

export default FirstPage;