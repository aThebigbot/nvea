<div align="center">

#  `nvea`

🗂 CLI Commands Creator & Handler
</div>



### Installation

```shell
npm i nvea
```

### 📥 Imports

```js
/* ESM */  
import { Command } from 'nvea';

/* CJS */  
const { Command } = require('nvea')
```

### 📤 Create Command

```js
new Command({ name: 'name', aliases: [] })
.on((res, req) => { /*...*/ })
```

### 🎈 Aliases

```js
new Command({ name: 'name', aliases: ['cool-aliase-1', 'cool-aliase-2'] })
.on((res, req) => { /*...*/ })
```

### 💙 10ks To
@aThebigbot
@NotGabry
