import React from 'react';
import { Calendar, Modal, List, Badge } from 'antd';
import moment from '../component/moment';
import 'antd/dist/antd.css';
import './mainPage.css'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      visible: false,
      setVisible: false,
      confirmLoading: false,
      setConfirmLoading: false,
      modalText: 'Content of the modal',
      setModalText: 'Content of the modal',
    }
  }
  onChange(value) {
    console.log(value._d);
    this.showModal();
  }

  showModal = () => {
    this.setState({visible: true});
  };

  handleOk = () => {
    this.setState({modalText:'The modal will be closed after two seconds'});
    this.setState({setConfirmLoading: true});
    setTimeout(() => {
      this.setState({visible: false});
      this.setState({setConfirmLoading:false});
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
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
          title="Title"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.state.handleCancel}
        >
          <p>{this.state.modalText}</p>
        </Modal>
        <List>
        </List>
      </div>
    );
  } 
}

export default MainPage;
