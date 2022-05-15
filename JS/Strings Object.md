# String Objects

## Common String Variables 
```javascript
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
```

## Compare String
```javascript
  function isEqual(str1, str2, ignoreCase) {
    return ignoreCase ? str1.toLowerCase() == str2.toLowerCase() : str1 == str2;
  }
```

## Template Strings (ES6)
Template String replacement elements are indicated by the Dollar sign and curly braces with a normal string that is contained in apostrophe (AKA backtick) delimiters.
```javascript
  ${expression}
```
For example:
```javascript
  var js = "JavaScript";
  var des = `Template strings can now be used in ${js} with lot of additional features.`;
```
Outputs:
```console
  Template strings can now be used in Java Script with lot of additional features.
```
These Template Strings can include multiple lines and hve no inlcuded template elements.
```javascript
  var str = `This is my template string...
  and is working across lines`;
```

#### Using XML as a Template delimiter:
```javascript
  var xml = <XML>
      Here 
      is 
      some 
      multiline 
      text!
  </XML>
```

#### Add a Format prototype function to String
```javascript
  // Add a Format prototype function to String
  // First, checks if it isn't implemented yet.
  if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };
  }
```
**Example call**
```javascript
  "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
```
Outputs: 
```console
  ASP is dead, but ASP.NET is alive! ASP {2}
```
Note the {2} element wasn't provided in the call, so it defaultrs as a plain string value.

## Test Characters for Printability
```javascript
function isPrintable(keycode) {
  const valid = (keycode > 47 && keycode < 58) || // number keys
    keycode === 32 || // spacebar & return key(s) (if you want to allow carriage returns)
    (keycode > 64 && keycode < 91) || // letter keys
    (keycode > 95 && keycode < 112) || // numpad keys
    (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
    (keycode > 218 && keycode < 223); // [\]' (in order)
  return valid;
}
```

## Trap HTML Entity Problems
```javascript
var safeHtml = function(unsafeHtml) {
  if (unsafeHtml) {
    return unsafeHtml
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;') 
      .replace(/\//g, '&#x2F;')
      .replace(/\(/g, '&lpar;')
      .replace(/\)/g, '&rpar;');
    }
    return '';
};
```

### Trim with a Regular Expression
```javascript
function TrimString(value) {
    return value.replace(/^\s+|\s+$/g, '')
}
```

