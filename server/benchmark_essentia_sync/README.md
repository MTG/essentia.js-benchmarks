

To make the suites in this folder work, there are two mods needed.

In the file

/dist/essentia/essentia-wasm.module.js

This two lines have to added at the top.


`import path from 'path';`

`const __dirname = path.resolve();`


in package.json `"type": "module",` needs to be added