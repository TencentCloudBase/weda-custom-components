import Button from './components/button';
import showToast from './actions/showToast';
import Gantt from './components/gantt.json';
import Chart from './components/echart.json';

import Slider from './components/slider.json';

export const components = {
  Slider,

  Button,
  Gantt,
  Chart,
};

export const actions = {
  showToast,
};

export default {
  components,
  actions,
};
