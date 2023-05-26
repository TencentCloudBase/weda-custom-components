---
inject: true
to: src/mp/index.json
skip_if: <%= compName %>
after: \"components\":\s+\{
sh: npx prettier --write src/mp/index.json
---
"<%= compName %>": "components/<%= h.changeCase.paramCase(compName) %>/index",