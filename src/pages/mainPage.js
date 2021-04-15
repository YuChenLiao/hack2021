import React from 'react';
import { Card, Calendar, Modal, List } from 'antd';
import moment from '../component/moment';
import 'antd/dist/antd.css';

function MainPage() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const [modalText, setModalText] = React.useState('Content of the modal');
  function onChange(value) {
    console.log(value._d);
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
        
  return (
    <div>
      <Card>
        <Calendar 
          fullscreen={false} 
          onChange={onChange}
          headerRender={() => {
            let date =  moment();
            return (
              <div>{date.format('LL')}</div>
            )
          }}
        />
      </Card>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      <List>
      </List>
    </div>
  );
}

export default MainPage;
