import React from 'react';

import { Button } from '../web/components';

import config from '../configs/components/button.json';

const { meta } = config;

export default {
  title: `${meta.category}/${meta.title}`,
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: '按钮',
  type: 'primary',
  events: {
    customevent: () => {}
  }
};

export const Mini = Template.bind({});

Mini.args = {
  text: '按钮',
  size: 'mini',
  events: {
    customevent: () => {}
  }
};

export const Default = Template.bind({});

Default.args = {
  type: 'default',
  text: '按钮',
  events: {
    customevent: () => {}
  }
};
