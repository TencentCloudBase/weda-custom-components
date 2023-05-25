---
to: src/mp/components/<%= h.changeCase.paramCase(compName) %>/index.json
sh: npx prettier --write src/mp/components/<%= h.changeCase.paramCase(compName) %>/index.json
---
{
  "component": true,
  "styleIsolation": "shared",
  "usingComponents": {}
}