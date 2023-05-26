import * as React from 'react';
import { Slider as TeaSlider } from 'tea-component';
import * as PropTypes from 'prop-types';
import { useFormInputTrait } from '@cloudbase/weda-ui';

import 'tea-component/dist/tea.css';

const Slider = React.forwardRef(function Slider(props, inputRef) {
  const {
    className,
    id,
    style,
    min,
    max,
    step,
    events,
    $widget,
    markValueOnly,
  } = props;

  const {
    /* 兼容受控与非受控的 value */
    value,
    /* 禁用状态 */
    disabled,
    /* 只读状态 */
    readOnly,
    /* 封装后的onChange */
    onChange,
  } = useFormInputTrait({
    /** runtime 传入的 widget 实例 */
    $widget,
    inputRef,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onChange: props.onChange,
  });
  const changeHandler = React.useCallback(
    (value) => {
      onChange?.(value);
      /* 调用change回调函数 */
      events?.change?.({ value });
    },
    [events]
  );

  return (
    <TeaSlider
      id={id}
      className={className}
      style={style}
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled || readOnly}
      markValueOnly={markValueOnly}
      onChange={changeHandler}
    />
  );
});

Slider.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  events: PropTypes.objectOf(PropTypes.func),
  disabled: PropTypes.bool,
  markValueOnly: PropTypes.bool,
  onChange: PropTypes.func,

  /** runtime 传入的 widget 实例 */
  $widget: PropTypes.object,
};

export default Slider;
