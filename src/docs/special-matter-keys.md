---
page: 6
title: Special Keys
---

{% raw %}

## Special Front Matter Keys

- \_layout
- \_permalink
- \_paginate - paginate based on array or object

```md
---
_layout: main.ulka
_permalink: _PAGINATE_
_paginate:
  data: tags
  size: 1
  singleValue: true
  permalink: tags/{{ pagination.current; }}/
---
```

{% endraw %}
