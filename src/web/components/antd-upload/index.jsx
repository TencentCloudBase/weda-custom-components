import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const defaultBeforeUpload = () => false;
const AntdUpload = ({ events, action, callbacks, style, id, className }) => {
  const beforeUpload = callbacks?.beforeUpload ?? defaultBeforeUpload;
  return (
    <Upload
      style={style}
      id={id}
      className={className}
      action={action}
      listType="picture"
      beforeUpload={beforeUpload}
      onChange={(value) => {
        events?.change({ value });
      }}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};
export default AntdUpload;
