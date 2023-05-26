---
inject: true
to: src/configs/index.js
skip_if: <%= compName %>
after: export\s+const\s+components
sh: npx prettier --write src/configs/index.js
---

<%= compName %>,
