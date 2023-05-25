---
to: src/mp/components/<%= h.changeCase.paramCase(compName) %>/index.wxml
sh: npx prettier --write src/mp/components/<%= h.changeCase.paramCase(compName) %>/index.wxml
---
<block id="{{id}}" style="{{style}}" class="{{className}}"></block>