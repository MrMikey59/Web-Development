# Web Design

- [Drupal 7](https://www.drupal.org) - robust content management tools, sophisticated APIs for multichannel publishing
- Fetching HTML data: [`pup`](https://github.com/EricChiang/pup)
- Fetching JSON: [`jq`](https://stedolan.github.io/jq/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Google](https://www.google.com/)
  - [ChromeDriver](https://sites.google.com/chromium.org/driver/)  
      ChromeDriver is a standalone server that implements the W3C WebDriver standard. ChromeDriver is available for Chrome on Android and Chrome on Desktop (Mac, Linux, Windows and ChromeOS).  
  - [Web.dev](https://web.dev), from Google, publishers of [Chrome](https://www.google.com/chrome/)
- [Internet Engineering Task Force (IETF)](http://www.ietf.org/)
  - [RFC4180](http://www.ietf.org/rfc/rfc4180.txt) Common Format and MIME Type for Comma-Separated Values (CSV) Files
- [John Resig](https://github.com/jeresig)
- [Local Host:3000](http://localhost:3000) 
- [Matt Kruse](mailto:matt@mattkruse.com) or [WWW](http://www.mattkruse.com/) 
  -	AnchorPosition.js
  -	CalendarPpopup.js
  -	PopupWindow.js
- [MediaElement.js](http://www.mediaelementjs.com/) 
- [Microsoft](https://www.microsoft.com/)
  - [Learn WebDev from Microsoft](https://docs.microsoft.com/en-us/learn/modules/build-simple-website/?WT.mc_id=academic-13441-cxa)
  - [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), for [Microsoft Edge](https://www.microsoft.com/edge)
- [Mozilla](https://www.mozilla.org/)
  - [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA)  
  - [Firefox](https://www.mozilla.org/firefox/) browser
  - [Mozilla Developer Network (MDN)](http://developer.mozilla.org)
  - [Web](https://developer.mozilla.org/docs/Web), from Mozilla, the publishers
- [MobileDetectJS](https://github.com/hgoebl/mobile-detect.js) 
- [PC Mag](www.pcmag.com/)   
- [PerimeterX, Inc](www.perimeterx.com) 
- [Prettify.js]( https://www.prettifyjs.net/)  - minimize and beautify scripts (Base64, CSS, HTML, JSON, URL)
- [PySchool.net](http://pyschool.net) 
- [Smarter Way to Learn (Mark Myers)](http://www.ASmarterWayToLearn.com)  
- [TypeScript](www.typescriptlang.org)  
- [WC3 Schools](http://w3schools.com)  
- [WC3 Schools(Sisnixx)](https://w3schools.sinsixx.com/)  
- [WC3 Web Driver Standard](https://w3c.github.io/webdriver/webdriver-spec.html)  
    WebDriver is an open source tool for automated testing of webapps across many browsers. It provides capabilities for navigating to web pages, user input, JavaScript execution, and more.
- [Web Tool Kit](http://www.webtoolkit.info/)   
- [World Wide Web Organization](www.w3.org)  
  - 📓 http://w3docs.com
- [World Wide Web Consortium (W3C)](www.w3c.org)   

- 📓 http://devdocs.io  
- 📓 https://free-for.dev  

#### Free hosting
- ⚡️ http://netlify.com
- ⚡️ http://firebase.google.com
- ⚡️ http://aws.amazon.com
- ⚡️ http://heroku.com
- ⚡️ [GitHub Pages](http://pages.github.com)
- ⚡️ http://vercel.com
- ⚡️ http://surge.sh
- ⚡️ http://render.com
- ⚡️ [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages)

#### Coding Challenge Platforms
- ⌨️ http://codewars.com
- ⌨️ http://topcoder.com
- ⌨️ http://codingame.com
- ⌨️ http://hackerrank.com
- ⌨️ http://projecteuler.net
- ⌨️ http://coderbyte.com
- ⌨️ http://codechef.com
- ⌨️ http://exercism.io
- ⌨️ http://leetcode.com
- ⌨️ http://spoj.com

#### Freelancing platforms
- 💰 http://toptal.com
- 💰 http://upwork.com
- 💰 http://freelancer.com
- 💰 http://peopleperhour.com
- 💰 http://simplyhired.com
- 💰 http://envato.com
- 💰 http://guru.com
- 💰 http://fiverr.com
- 💰 http://hireable.com
- 💰 http://6nomads.com


#### UI Inspiration
- 🤔 http://uimovement.com
- 🤔 http://uigarage.net
- 🤔 http://collectui.com
- 🤔 https://dribbble.com
- 🤔 https://ui-patterns.com

#### Website Optimization Tools
- ⚡ [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights)
- ⚡ [GTmetrix](https://gtmetrix.com)
- ⚡ [WebPageTest](https://www.webpagetest.org)
- ⚡ [Yslow](http://yslow.org)
- ⚡ [CrUX](https://crux.run)

## Examples  
| HTML | CSS | Script |
| ---- | ---- | ---- |
| ```<label>Load CSV file: </label><input type="file" id="fileInputCSV" /><br/>``` | | ```var fileInputCSV = document.getElementById('fileInputCSV');```<BR>``` fileInputCSV.addEventListener('change', function (e) { ```<BR>```<ProccessFile>```<BR>``` } ```|
| ```<label>Load XML file: </label><input type="file" id="fileInputXML" /><br/> ```| | ```var fileInputXML = document.getElementById('fileInputXML');```<BR>``` fileInputXML.addEventListener('change', function (e) { ```<BR>```<ProcessFile>```<BR>``` } ```|
| ```<input type="button" id="fileExport" hidden="true" />``` | | ```var btnSave = document.getElementById('fileExport');```<BR>``` btnSave.hidden = false; btnSave.value = 'Save as TSV file ->';```<BR>``` document.body.appendChild(btnSave);```<BR>``` // export when button clicked btnSave.addEventListener('click', function (e) { ```<BR>```<ProcessFile>```<BR>``` }); ```|
| ```<table id="result"></table>``` | | ```var table = document.getElementById('result');```<BR>``` table.innerHTML = "";```<BR>``` sheet.forEach(function (el, i) { var row = document.createElement('tr');```<BR>``` el.forEach(function (el, i) { var cell = document.createElement('td');```<BR>``` cell.innerHTML = el.value;```<BR>``` row.appendChild(cell); });```<BR>``` table.appendChild(row); }); ```|

