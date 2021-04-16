import React from 'react';
import { Modal, Input, Upload } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { checkType } from '../service/upload';

const { TextArea } = Input;
class Pop extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      textForm: {
        title: '',
        content: '',
        img: [],
        date: moment(),
      },
    }
  }
  handleTitle = ({target: {value}}) => {
    this.setState({
      textForm: {
        title: value,
      }
    })
  }
  handleContent = ({target: {value}}) => {
    this.setState({
      textForm: {
        content: value,
      }
    })
  }
  handleImg = () => {
    
  }
  customRequest = (option) => {
    console.log(option.file);
    
    console.log(this.state.textForm.img)
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
            value={this.state.textForm.title}
            onChange={this.handleTitle}
          />
        </div>
        <div style={{backgroundColor: '#F9F9F9',borderRadius: '5px',marginTop: '20px'}}>
          <TextArea 
            bordered={false} 
            autoSize={{ minRows: 3, maxRows: 5 }}
            value={this.state.textForm.content}
            onChange={this.handleContent}
          />
        </div>
        <div style={{marginTop: '20px'}}>
          <Upload 
            style={{backgroundColor: '#F9F9F9',borderRadius: '5px',marginTop: '20px'}} 
            listType="picture-card"
            fileList={this.state.fileList}
            beforeUpload={(file, fileList) => {
              this.setState({
                textForm: {
                  img: [...this.state.textForm.img,file],
                }
              })
              console.log(this.state.textForm.img)
              return Promise.all([
                checkType(file, ['image/png', 'image/jpeg']),
              ])
            }}
            onChange={this.handleImg}
            maxCount={3}
          >上传图片</Upload>
        </div>
      </Modal>
    )
  }
}

export default Pop;