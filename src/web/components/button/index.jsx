import * as React from 'react';
import * as PropTypes from 'prop-types';
import './index.css';
import 'weui';

export default function Button({
  text,
  size = 'default',
  type = 'primary',
  loading = false,
  disabled = false,
  plain = false,
  className = '',
  events,
  ...props
}) {
  return (
    <button
      className={`weui-btn weui-btn_${type} ${
        size !== 'default' ? `weui-btn_${size}` : ''
      } ${className}`}
      disabled={disabled}
      onClick={events.customevent}
      {...props}
    >
      {loading && <i className="weui-loading" />}
      {text}
    </button>
  );
}

Button.propTypes = {
  /**
   * 组件类型
   */
  type: PropTypes.oneOf(['primary', 'warn', 'default']),
  /**
   * 按钮大小
   */
  size: PropTypes.oneOf(['default', 'mini']),
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,

  /**
   * 加载中
   */
  loading: PropTypes.bool,

  /**
   * 镂空
   */
  plain: PropTypes.bool,

  /**
   * 按钮内容
   */
  text: PropTypes.string,

  /**
   * 低码平台注入的事件触发器
   */
  events: PropTypes.objectOf(PropTypes.func),
  className: PropTypes.string,
};

/**
 * 默认属性
 */
Button.defaultProps = {
  type: 'primary',
  size: 'default',
};
