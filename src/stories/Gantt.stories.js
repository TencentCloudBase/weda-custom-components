import React from 'react';
import { Gantt } from '../web/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: '图表/甘特图',
  component: Gantt,
  tags: ['autodocs'],
};

const Template = (args) => <Gantt {...args} />;

export const Default = Template.bind({});

Default.args = {
  tasks: [
    {
      start: '2023-04-01',
      end: '2023-04-15',
      name: '项目',
      id: 'ProjectSample',
      progress: 25,
      type: 'project',
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: '2023-04-01',
      end: '2023-04-02',
      name: '计划',
      id: 'Task 0',
      progress: 45,
      type: 'task',
      project: 'ProjectSample',
      displayOrder: 2,
    },
    {
      start: '2023-04-02',
      end: '2023-04-04',
      name: '调研',
      id: 'Task 1',
      progress: 25,
      dependencies: ['Task 0'],
      type: 'task',
      project: 'ProjectSample',
      displayOrder: 3,
    },
    {
      start: '2023-04-04',
      end: '2023-04-08',
      name: '会议',
      id: 'Task 2',
      progress: 10,
      dependencies: ['Task 1'],
      type: 'task',
      project: 'ProjectSample',
      displayOrder: 4,
    },
    {
      start: '2023-04-04',
      end: '2023-04-08',
      name: '研发',
      id: 'Task 3',
      progress: 2,
      dependencies: ['Task 2'],
      type: 'task',
      project: 'ProjectSample',
      displayOrder: 5,
    },
    {
      start: '2023-04-08',
      end: '2023-04-10',
      name: '审查',
      id: 'Task 4',
      type: 'task',
      progress: 70,
      dependencies: ['Task 2'],
      project: 'ProjectSample',
      displayOrder: 6,
    },
    {
      start: '2023-04-15',
      end: '2023-04-15',
      name: '发布',
      id: 'Task 6',
      progress: '25',
      type: 'milestone',
      dependencies: ['Task 4'],
      project: 'ProjectSample',
      displayOrder: 7,
    },
    {
      start: '2023-04-18',
      end: '2023-04-19',
      name: '团建',
      id: 'Task 9',
      progress: 0,
      isDisabled: true,
      type: 'task',
    },
  ],
  stylingOption: {
    listCellWidth: '155px',
    columnWidth: '65',
  },
  displayOption: {
    viewMode: 'Day',
    locale: 'zh',
  },
  events: {
    onClick: ({ task }) => {},
    onSelect: ({ task, isSelected }) => {},
    onDoubleClick: ({ task }) => {},
    onDelete: ({ task }) => {},
    onDateChange: ({ task, children }) => {},
    onProgressChange: ({ task, children }) => {},
    onExpanderClick: ({ task }) => {},
  },
};

export const Primary = Template.bind({});

Primary.args = {
  tasks: [
    {
      start: '2023-04-01',
      end: '2023-04-15',
      name: '项目',
      id: 'ProjectSample',
      progress: 25,
      type: 'project',
      hideChildren: false,
      displayOrder: 1,
    },
  ],
};
