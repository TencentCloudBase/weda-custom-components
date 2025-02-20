import * as React from 'react';
import * as PropTypes from 'prop-types';

export default function Chart({ className = '' }) {
  return (
    <div className={`${className}`}>
      该组件必须在小程序真实环境使用才能够看到实际效果，可结合官方更多图表组件做预览使用，option参数属性一致。
    </div>
  );
}

Chart.propTypes = {
  className: PropTypes.string,
};
