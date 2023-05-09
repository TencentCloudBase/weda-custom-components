import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react';
import * as PropTypes from 'prop-types';
import { Gantt } from 'gantt-task-react';
import { ErrorBoundary } from 'react-error-boundary';
import 'gantt-task-react/dist/index.css';

// 时间格式是否符合要求
const isValidDate = (date) => date instanceof Date && !isNaN(date.getTime());

// 生成task,时间转换
const taskConvert = (task) => {
  let _task = task ? [...task] : [];
  _task = _task.map((i) => ({
    ...i,
    start: new Date(i.start),
    end: new Date(i.end),
  }));
  // 结束时间大于开始时间
  if (
    _task.every(
      (i) => isValidDate(i.start) && isValidDate(i.end) && i.start < i.end
    )
  ) {
    return _task;
  }
  return _task;
};

// 拖拽task,时间转换
export function getStartEndDateForProject(tasks, projectId) {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}

const GanttComp = forwardRef(function GanttComp(props, ref) {
  const { className, id, style } = props;
  const [error, setError] = useState(null);
  const [tasks, setTasks] = React.useState(() => {
    return taskConvert(props?.tasks);
  });

  const ganttProps = { ...props.stylingOption, ...props.displayOption };

  useEffect(() => {
    const task = taskConvert(props.tasks);
    setTasks(task);
  }, [props?.tasks]);

  const handleTaskDelete = (task) => {
    const callback = () => {
      setTasks(tasks.filter((t) => t.id !== task.id));
    };
    if (props?.events?.onDelete) {
      props.events.onDelete({ task, callback });
    }
  };

  const handleProgressChange = async (task, children) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    if (props?.events?.onProgressChange) {
      props.events.onProgressChange({ task, children });
    }
  };

  const handleDblClick = (task) => {
    if (props?.events?.onDoubleClick) {
      props.events.onDoubleClick({ task });
    }
  };

  const handleClick = (task) => {
    if (props?.events?.onClick) {
      props.events.onClick({ task });
    }
  };

  const handleSelect = (task, isSelected) => {
    if (props?.events?.onSelect) {
      props.events.onSelect({ task, isSelected });
    }
  };

  const handleExpanderClick = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    if (props?.events?.onExpanderClick) {
      props.events.onExpanderClick({ task });
    }
  };

  const handleDateChange = (task, children) => {
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
    if (props?.events?.onDateChange) {
      props.events.onDateChange({ task, children });
    }
  };

  const onError = (error) => {
    setError({ message: error.message });
  };

  // 事件属性
  useImperativeHandle(
    ref,
    () => ({
      error,
    }),
    [error]
  );

  return (
    <ErrorBoundary fallback={<div></div>} onError={onError}>
      <div className={className} id={id} style={style}>
        <Gantt
          {...ganttProps}
          data-testid="formDetail"
          tasks={tasks}
          onClick={handleClick}
          onSelect={handleSelect}
          onDoubleClick={handleDblClick}
          onDelete={handleTaskDelete}
          onDateChange={handleDateChange}
          onProgressChange={handleProgressChange}
          onExpanderClick={handleExpanderClick}
        />
      </div>
    </ErrorBoundary>
  );
});

export default GanttComp;
GanttComp.propTypes = {
  /**
   * 任务列表
   */
  tasks: PropTypes.array,
  /**
   * 样式风格
   */
  stylingOption: PropTypes.object,
  /**
   * 是否禁用
   */
  displayOption: PropTypes.object,

  /**
   * 低码平台注入的事件触发器
   */
  events: PropTypes.objectOf(PropTypes.func),

  className: PropTypes.string,

  style: PropTypes.object,

  id: PropTypes.string,
};
