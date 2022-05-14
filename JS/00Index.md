# Index of JS

This folder contains JavaScript snippets and examples.

JavaScript is also known as  and JScript (MS Version)  

There's Vanilla JavaScript and then there's ECMAScript/ES6/ES2015/ES2017/ES2020, LiveScript and TypeScript and CoffeeScript, and then there's React and Vue and Angular and Gulp and Babel and WebPack and Node.js.  

| Acronym | Description |  
| --- | --- |  
| CS <BR> coffee | CoffeeScript |  
| ES5 | ECMAScript 5 |  
| ES6 | ECMAScript 6 |  
| JS | JavaScript or JScript |  
| TS | TypeScript |  

### JavaScript Enclosure in HTML
```html
  <SCRIPT type="text/JavaScript">
  </SCRIPT>
```

Resources:
- [**Bogan Stashchuk**](https://github.com/bstashchuk/)  
  - [JavaScript Bible Basics](https://github.com/bstashchuk/JavaScript-Bible-Basics.git)
  - [JavaScript Bible ES6]( https://github.com/bstashchuk/JavaScript-Bible-ES6.git) 
- [CoffeeScript](http://coffeescript.org/) - CoffeeScript turns a custom language that provides some syntactic sugar into JavaScript.
- [CreateJS](http://createjs.com/) 
- [jscompress.com](http://jscompress.com)
  - [JSCompress on GitHub]( https://github.com/circlecell/jscompress.com.git) 
- [JS Foundation](https://js.foundation) 
- [JSFiddle](http://jsfiddle.net/) – A Web Development code playground (CSS, HTML & JS)  
- [JSLint]() – a JavaScript validator that ensures that our code doesn’t break many sensible JavaScript best practices; written by Douglas Crockford
- [MongoDB]() - a noSQL database that uses the JavaScript native JSON data format.
- [Node.js]() - event-based web server; uses the Google V8 JavaScript engine.
- [Shifty](http://jeremyckahn.github.io/shifty) - a tweening engine for JavaScript..
- [Simple-Excel.js](https://github.com/faisalman/simple-excel-js) - Client-side script to easily parse / convert / write any Microsoft Excel XLSX / XML / CSV / TSV / HTML / JSON / etc formats  
- [Socket.IO]() - provides seamless near-real-time messaging between the web server and the client.
- [TaffyDB2]() - provide high-performance, data-centric models.

# Hold Area

## Common Constants & Variables

#### Common Objects
| Data | Usage |
|  ---- | ----|
| document | ```d = window.document``` <BR> ```doc = window.document``` |
| location | ```l = window.location ```<BR> ```loc = window.location``` |
| navigator | ```n = window.navigator``` <BR> ```nav = window.navigator``` |
| window | ```w = window``` <BR> ```win = window``` |
| jQuery | ```window.jQuery = jQuery``` <BR> ```window.$ = jQuery``` |


#### Regular Expresions
```javascript
  var Regex = {
      COMMA       : /(,)(?=(?:[^"]|"[^"]*")*$)/g,
      FILENAME    : /.*\./g,
      IMAGEFILE   : /\.(bmp|jpe?g|png|gif|webP)$/i,
      LINEBREAK   : /\r\n?|\n/g,
      QUOTATION   : /(^")(.*)("$)/g,
      TWO_QUOTES  : /""/g
  };
```
Example of Usage:
```javascript
  function getFiletype (filename) {
    return filename.replace(Regex.FILENAME, '');
  },
```

#### Special Characters
```javascript
  var Char = {
      COMMA           : ',',
      CRLF            : '\r\n'
      NEWLINE         : '\n',
      RETURN          : '\r',
      SEMICOLON       : ';',
      TAB             : '\t',
  };
```
