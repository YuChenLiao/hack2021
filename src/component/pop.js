import React from 'react';
import { Modal, Input, Upload } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const { TextArea } = Input;
class Pop extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      textForm: {
        title: '',
        content: '',
        img: File,
        date: moment(),
      },
    }
    console.log(this.props)
    console.log(this.state)
  }
  render() {
    return(
      <Modal
        visible={this.props['visible']}
        onOk={this.props['method'].handleOk}
        okText="确定"
        cancelText="取消"
        bodyStyle={{backgroundColor: '#FFFFFF'}}
        confirmLoading={this.props['confirmLoading']}
        onCancel={this.props['method'].handleCancel}
      >
        <div style={{backgroundColor: '#F9F9F9',borderRadius: '5px',marginTop: '20px'}}>
          <Input 
            bordered={false} 
            onChange={this.handleTitle}
          />
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
    )
  }
}

export default Pop;