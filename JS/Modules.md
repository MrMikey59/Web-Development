# JavaScript Modules

Script Calls for Modules
```html
<SCRIPT type="module" src="backback.js"></SCRIPT>
<SCRIPT type="module" src="script.js"></SCRIPT>
```
**Note**: Defer is included when using Modules; objects in modules are protected from access in the console.

Import (Working Module)	
```javascript
import backpack from "./backpack.js";
```

Export (Class/Prototype Module)	
```javascript
export default backpack;
```

Page Document (Note: Order is important)	
```html
<script type="module" src="backpack.js"></script>
<script type="module" src="script.js"></script>
```

