import * as React from 'react';

export default function WeuiUploader(props) {
  const { className, id, style } = props;
  return (
    <div className={className} id={id} style={style}>
      Only work in miniprogram environment
    </div>
  );
}
