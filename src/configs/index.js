import Button from './components/button';
import showToast from './actions/showToast';
import Gantt from './components/gantt.json';

import Slider from './components/slider.json';

export const components = {
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
