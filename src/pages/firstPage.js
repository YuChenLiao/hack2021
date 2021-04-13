import React from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import './firstPage.css'

function FirstPage() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const [modalText, setModalText] = React.useState('Content of the modal');
  function onChange() {
    showModal();
  }

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
  const changeTips = () => {
    states.showTips = !states.showTips;
    console.log(states.showTips);
  }
  let states = {
    showTips: false,
  }
  return (
    <div className="main">
      <div className="showPic">
        <img alt="预览" src="/logo192.png" className="pic" onMouseEnter={changeTips} onMouseLeave={changeTips}></img>
      </div>
      <Button 
        type="primary" 
        shape="round" 
        size="large"
        className="touch"
        onClick={onChange}
      >记录今日美好</Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
}

export default FirstPage;