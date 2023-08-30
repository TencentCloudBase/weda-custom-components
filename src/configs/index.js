import Button from './components/button';
import showToast from './actions/showToast';
import Gantt from './components/gantt.json';

import Slider from './components/slider.json';

import AntdUpload from './components/antd-upload.json';

import WeuiUploader from './components/weui-uploader.json';

export const components = {
  WeuiUploader,

  AntdUpload,

  Slider,

  Button,
  Gantt,
};

export const actions = {
  showToast,
};

export default {
  components,
  actions,
};
