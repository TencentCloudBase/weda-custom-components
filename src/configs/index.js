import Button from './components/button';
import showToast from './actions/showToast';
import Gantt from './components/gantt.json';
import Chart from './components/echart.json';

export const components = {
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
