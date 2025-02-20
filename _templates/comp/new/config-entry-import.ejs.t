---
inject: true
to: src/configs/index.js
skip_if: <%= h.changeCase.paramCase(compName) %>\.json
before: export\s+const\s+components
sh: npx prettier --write src/configs/index.js
---
import <%= compName %> from './components/<%= h.changeCase.paramCase(compName) %>.json';
