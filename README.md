# nvea

Create cli nodejs app

```js
import { Command } from "nvea/src";

new Command({ name: "help", aliases: ["h", "-h", "-help"] })
.on((res, req) => {})
```

### Installation

```shell
npm i nvea
```

### Import

```js
/* ESM */ import { Command } from "nvea/src";

/* CJS */ const { Command } = require("nvea");
```

### Create Command

```js
new Command({ name: "name", aliases: [] })
.on((res, req) => { /*...*/ })
```

### Aliases

```js
new Command({ name: "name", aliases: ["cool-aliase-1", "cool-aliase-2"] })
.on((res, req) => { /*...*/ })
```


### Options

```js
new Command({ name: "name", aliases: ["cool-aliase-1", "cool-aliase-2"] })
.on((res, req) => { /*...*/ })
```

### More info

Made by: Thebigbot0000, Gabry-76
