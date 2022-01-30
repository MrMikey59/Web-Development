# SVG: Scalable Vector Graphics

This folder contains SVG notes, snippets and example code

#### Attributes
| Attribute | Description | Example |  
| ---| --- | --- |  
| aria-label | label to support readers | `aria-label="Loading"` |  
| class | the CSS class | `class="ytp-svg-shadow"` |  
| clip-path |  | `clip-path="url(#ytp-svg-volume-animation-mask)"` |  
| color | color assignment | `color="black"` |  
| cx <BR> cy | circle center (X,Y) coordinates | `cx="362" cy="204"` |  
| d |  |  |  
| data-fill |  | `data-fill="1" ` |  
| enable-background |  | `enable-background="new 0 0 100 100"` |  
| fill | color for filling the shape | `fill="#fff"` | 
| height | radius | `height="100"` <BR> `height="100%"`|  
| r | radius | `r="204"` |  
| stroke-linecap |  |  |  
| transform |  | `transform="translate(0, 0)"` |  
| version |  | `version="1.1"` |  
| viewBox |  | `viewBox="0 0 64 64" ` |  
| width |  | `width="100"` <BR> `width="100%"` |  
| xlink:href |  | `xlink:href="#ytp-id-16"` |  

Elements
| Element | Description | Example | 
| --- | --- | --- |  
| circle |  | `<circle cx="362.589996" cy="204.589996" data-fill="1" id="Oval" r="204.589996" fill="#00f"></circle>` | 
| clipPath |  | `<clipPath>  </clipPath>` | 
| defs | definitions | `<defs>  </defs>` |  
| g | grouping | `<g> </g>` |  
| path |  | `<path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>` |  
| rect | rectangle | `<rect data-fill="2" height="545.799988" id="Rectangle" width="100" x="0" y="0" fill="#f00"></rect>` |  
| svg | container | `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%" fill-opacity="0.3">  </svg>` |  
| use |  | `<use class="ytp-svg-shadow" xlink:href="#ytp-id-14"> </use>` |  

## SVG The Container
```svg
<svg 
  aria-label="Loading" 
  viewBox="0 0 64 64" 
  class="sc-dlfnbm ktLGbV"
>  </svg>
```

## Circle
```svg
<circle cx="32" cy="32" r="32" class="sc-hKgILt dFKJAk"></circle>
<circle color="light" cx="32" cy="32" r="32" stroke-linecap="round" class="sc-eCssSg kRaCnm"></circle>
```

## DESC - The Description
```svg
<DESC>Item Name or Description</DESC>
```

## Polygon
```svg
<POLYGON 
  fill="blue"
  stroke="blue"
  stroke-width="10" 
  points="350,75  379,161 469,161 397,215 423,301 350,250 277,301 303,215 231,161 321,161"
 />
```
  
## Examples

#### Blue Star
```svg
<SVG width="12cm" height="4cm" viewBox="0 0 1200 400"
     xmlns="http://www.w3.org/2000/svg" version="1.1">
  <DESC>Blue Star</DESC>
  <POLYGON 
      fill="blue" stroke="blue" stroke-width="10" 
      points="350,75  379,161 469,161 397,215 423,301 
              350,250 277,301 303,215 231,161 321,161" />
</SVG>
```

