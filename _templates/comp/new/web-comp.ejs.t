---
to: src/web/components/<%= h.changeCase.paramCase(compName) %>/index.jsx

---
import * as React from 'react';

export default function <%= compName %> (props) {
  const {
    className,
    id,
    style
  } = props;
  return (
    <div className={className} id={id} style={style}>
      Hello <%= compName %>
    </div>
  );
}
