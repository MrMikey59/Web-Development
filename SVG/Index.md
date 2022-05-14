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

#### FaceBook Icon
```svg
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 32">
  <path d="M17.12 0.224v4.704h-2.784q-1.536 0-2.080 0.64t-0.544 1.92v3.392h5.248l-0.704 5.28h-4.544v13.568h-5.472v-13.568h-4.544v-5.28h4.544v-3.904q0-3.328 1.856-5.152t4.96-1.824q2.624 0 4.064 0.224z">
  </path>
</svg>
```

#### LinkedIn Icon
```svg
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 27 32">
  <path d="M6.24 11.168v17.696h-5.888v-17.696h5.888zM6.624 5.696q0 1.312-0.928 2.176t-2.4 0.864h-0.032q-1.472 0-2.368-0.864t-0.896-2.176 0.928-2.176 2.4-0.864 2.368 0.864 0.928 2.176zM27.424 18.72v10.144h-5.856v-9.472q0-1.888-0.736-2.944t-2.272-1.056q-1.12 0-1.856 0.608t-1.152 1.536q-0.192 0.544-0.192 1.44v9.888h-5.888q0.032-7.136 0.032-11.552t0-5.28l-0.032-0.864h5.888v2.56h-0.032q0.352-0.576 0.736-0.992t0.992-0.928 1.568-0.768 2.048-0.288q3.040 0 4.896 2.016t1.856 5.952z">
  </path>
</svg>
```

#### Share Icon
```svg
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 32">
  <path d="M20.8 20.8q1.984 0 3.392 1.376t1.408 3.424q0 1.984-1.408 3.392t-3.392 1.408-3.392-1.408-1.408-3.392q0-0.192 0.032-0.448t0.032-0.384l-8.32-4.992q-1.344 1.024-2.944 1.024-1.984 0-3.392-1.408t-1.408-3.392 1.408-3.392 3.392-1.408q1.728 0 2.944 0.96l8.32-4.992q0-0.128-0.032-0.384t-0.032-0.384q0-1.984 1.408-3.392t3.392-1.408 3.392 1.376 1.408 3.424q0 1.984-1.408 3.392t-3.392 1.408q-1.664 0-2.88-1.024l-8.384 4.992q0.064 0.256 0.064 0.832 0 0.512-0.064 0.768l8.384 4.992q1.152-0.96 2.88-0.96z">
  </path>
</svg>
```

#### Twitter Icon
```svg
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 32">
  <path d="M28.928 7.296q-1.184 1.728-2.88 2.976 0 0.256 0 0.736 0 2.336-0.672 4.64t-2.048 4.448-3.296 3.744-4.608 2.624-5.792 0.96q-4.832 0-8.832-2.592 0.608 0.064 1.376 0.064 4.032 0 7.168-2.464-1.888-0.032-3.36-1.152t-2.048-2.848q0.608 0.096 1.088 0.096 0.768 0 1.536-0.192-2.016-0.416-3.328-1.984t-1.312-3.68v-0.064q1.216 0.672 2.624 0.736-1.184-0.8-1.888-2.048t-0.704-2.752q0-1.568 0.8-2.912 2.176 2.656 5.248 4.256t6.656 1.76q-0.16-0.672-0.16-1.312 0-2.4 1.696-4.064t4.064-1.696q2.528 0 4.224 1.824 1.952-0.384 3.68-1.408-0.672 2.048-2.56 3.2 1.664-0.192 3.328-0.896z">
  </path>
</svg>
```