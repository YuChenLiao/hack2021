import { message } from 'antd';

//检验文件类型
export function checkType(file, typeList) {
  return new Promise(function (resolve, reject) {
    if (!typeList.includes(file.type)) {
      message.error({
        title: '文件类型错误，请重新上传',
      })
      reject()
    } else {
      resolve()
    }
  })
}
