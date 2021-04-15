import React from 'react';
import { Calendar, Modal, List, Badge, Input, Upload } from 'antd';
import moment from '../component/moment';
import 'antd/dist/antd.css';
import './mainPage.css'

const { TextArea } = Input;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      visible: false,
      setVisible: false,
      confirmLoading: false,
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
    const num = value.date();
    return num ? (
      <Badge status="success" offset={[5, 0]} color="#015266" />
    ) : null;
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
        <List>
        </List>
      </div>
    );
  } 
}

export default MainPage;
