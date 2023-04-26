import Button from './components/button';
import showToast from './actions/showToast';
import Gantt from './components/gantt.json';

export const components = {
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
