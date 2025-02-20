---
to: src/mp/components/<%= h.changeCase.paramCase(compName) %>/index.js
sh: npx prettier --write src/mp/components/<%= h.changeCase.paramCase(compName) %>/index.js
---

Component({
  options: {
    virtualHost: true,
  },
  properties: {
    className: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
    id: {
      type: String,
      value: ''
    }
  },
  methods: {
  },
  observers: {
  },
});