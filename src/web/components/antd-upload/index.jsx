import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const defaultBeforeUpload = () => false;
const AntdUpload = ({ events, action, callbacks }) => {
  const beforeUpload = callbacks?.beforeUpload?.handler ?? defaultBeforeUpload;
  return (
    <Upload
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
