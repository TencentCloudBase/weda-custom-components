---
to: src/web/components/<%= h.changeCase.paramCase(compName) %>/index.tsx

---
import * as React from 'react';
import { CommonPropsType } from '../../types';

export interface PropsType extends CommonPropsType {

}

export default function <%= compName %> (props: PropsType) {
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