---
inject: true
to: src/web/components/index.js
skip_if: <%= compName %>
before: __INSERT_BEFORE;
---

export {default as <%= compName %>} from './<%= h.changeCase.paramCase(compName) %>';
