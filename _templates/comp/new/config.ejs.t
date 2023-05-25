---
to: src/configs/components/<%= h.changeCase.paramCase(compName) %>.json
sh: npx prettier --write src/configs/components/<%= h.changeCase.paramCase(compName) %>.json
---
{
  "$schema": "https://comp-public-1303824488.cos.ap-shanghai.myqcloud.com/schema/lcds_component.json",
  "data": {
    "properties": {

    }
  },
  "events": [
  ],
  "meta": {
    "name": "<%= compName %>",
    "title": "<%= compName %> TODO",
    "description": "<%= compName %> description",
    "category": "TODO",
    "icon": "TODO"
  }
}