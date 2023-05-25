---
inject: true
to: src/web/components/index.js
skip_if: <%= compName %>
before: import '[\w\.\/]+.css';
---

export {default as <%= compName %>} from './<%= h.changeCase.paramCase(compName) %>';