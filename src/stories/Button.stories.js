import React from 'react';

import { Button } from '../web/components';

export default {
  title: '表单/按钮',
  component: Button,
  tags: ['autodocs'],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: '按钮',
  type: 'primary',
  events: {
    customevent: () => {},
  },
};

export const Mini = Template.bind({});

Mini.args = {
  text: '按钮',
  size: 'mini',
  events: {
    customevent: () => {},
  },
};

export const Default = Template.bind({});

Default.args = {
  type: 'default',
  text: '按钮',
  events: {
    customevent: () => {},
  },
};
