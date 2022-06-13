# Attributes

| Attribute | Options | Example |  
| --- | --- | --- |  
| align-items | `<Align`  |   |  
| align-self| `{ baseline \| center \| end \| flex-end \| flex-start \| stretch }` | |  
| animation | `animateleft 0.4s;`  |   |  
| animation-delay | `<Time>` |  |   
| animation-duration | `<Time>` |  |   
| animation-iteration-count | `<Integer> \| infinite` |  |    
| animation-name | `<IDName> \| spin`|  |  
| animation-timing-function| `linear`| |  
| background | `{ <Color> \| [center/contain no-repeat] \| [ <ImageFile> <Setting> <Size> <Size> ] }` | --- |  
| background-attachment| `fixed` |  |  
| background-filter| `alpha(opacity=60)` |  |  
| background-position <br> background-position-x <br> background-position-y| `{ <Percent> \| center \| right \| top center };` | --- |  
| background-repeat| `no-repeat` | |  
| background-size | `{ <Size> \| contain \| cover }` | --- |  
| background-width| `<Size>` | |   
| border \<Size> \<Type> \<Color> | `none` | `border: solid 1px #aaa;` |  
| border-bottom | `{ <Size> \| none }` | --- |  
| border-bottom-left-radius | `<Size>` | --- |  
| border-bottom-right-radius | `<Size>` | --- |  
| border-collapse| `collapse` | |  
| border-radius <BR> -moz-border-radius <BR> -webkit-border-radius | `<Size>` | --- |  
| border-left | `<Size>` | --- |  
| border-right | `<Size>` | --- |  
| border-top | `<Size>` | --- |  
| bottom | `<Size>` |  |  
| box-flex | `<Integer>` |  |  
| box-shadow  \<Top> \<Right> \<Bottom> \<Color> | `{ none \| 0 2 15px rgba(0,0,0,.3) };` | --- |  
| box-sizing| `{ border-box \| content-box \| inherit}` ; |   |  
| clear| `{ both \| left \| right };` |   |  
| clip| `auto \| rect()` |   |  
| color | `<Color> \| inherit \| unset ` | `color: #ddd;` |  
| contain | `{ layout style \| none \| style };` |  |  
| cursor | `{ auto \| default \| initial \| move \| none \| not-allowed \| pointer \| text };`  |   |  
| direction| `{ ltr \| rtl }` | |  
| display | `{ block \| flex \| grid \| inline \| inline-block \| inline-flex \| none \| table \| table-cell }`   |   |  
| fill | `{ <Color> \| currentColor \| inherit \| none };` |  |  
| filter| `{ alpha(opacity=70) \| blur() \| grayscale() \| none };` | |  
| flex | `{ auto \| none \| <Size> \| 1 1 50% };`  |   |  
| flex-basis | `<Size>` |  |  
| flex-direction | `{ column \| row };`  |   |  
| flex-flow | `row nowrap` | |  
| flex-grow | <PositiveInteger> |  |  
| flex-item-align <BR> -ms-flex-item-align| `{ center \| end \| start \| stretch }`| |  
| flex-line-pack <BR> -ms-flex-line-pack|`{ center \| end \| space-around \| space-between \| start}`| |  
| flex-pack <BR> -ms-flex-pack| `{center \| end \| start}`| |  
| flex-shrink | <PositiveInteger> |  |  
| flex-wrap | `wrap` |  |  
| float | `{  none \| left \| right };`  |   |  
| font-family | `{ Arial \| Arial Narrow \| Cambria \| Helvetica \| LibreFranklin-Bold \| Roboto \| sans-serif \| serif };`  |   |  
| font-size |`<Size>`  |   |  
| font-smoothing  <BR> -moz-osx-font-smoothing <BR> -webkit-font-smoothing|`{antialiased \| grayscale }`| |  
| font-style|`{ normal }`| |  
| font-weight | `{ bold \| bolder \| normal \| <Integer> }` |  |  
| gap \<Size> \<Size>|| |  
| grid-column \<Type> \<Size>|| |  
| grid-row \<Type> \<Size>|| |  
| grid-template-columns|`{auto \| subgrid \| <Size>}`| |  
| grid-template-rows|`{auto \| subgrid \| <Size>}`| |  
| grid-row-align <BR> -ms-grid-row-align|`{center \| justify \| stretch}`| |  
| height | `<Size>` |  |  
| interpolation-mode <BR> -ms-interpolation-mode|`bicubic`| |  
| justify-content| `<Align>`  |   |  
| left | `{ <Percentage> \| <Size> }` | --- |  
| letter-spacing | `{ <Size> \| unset };` |  |  
| line-height | <Size> \| `normal \| inherit` | --- |  
| line-padding|| |  
| list-style-type| `{  circle \| decimal \| lower-alpha \| lower-roman \| none \| square \| upper-alpha \| upper-roman };` |   |  
| margin \<Top> \<Right> \<Bottom> \<Left> <BR> margin \<Top-Bottom> \<Right-Left> <BR> margin \<All>  <BR> margin-bottom <BR> margin-left <BR> margin-right <BR> margin-top | `{ <Size> \| auto \| none }` | --- |  
| max-height| `<Size>` |  |  
| max-width | `<Size>` |  |  
| min-height| `<Size>` |  |  
| min-width | `<Size>` |  |  
| object-fit|`cover`| |  
| opacity | `<Percent>` |  |  
| order | `<Integer>` |  |  
| outline|`{ none \| unset };`| |  
| overflow <br> overflow-x <br> overflow-y | `{ auto \| visible \| hidden \| scroll }` |  |  
| overflow-wrap | `break-word` |  |  
| padding <BR> padding-bottom <BR> padding-left <BR> padding-right <BR> padding-top | `<Size>` | --- |   
| pointer-events|`none`| |  
| position | `{ absolute \| fixed \| initial \| relative \| static };`  |   |  
| resize | `2px` |  |  
| right | `{ <Percentage> | <Size> }` | --- |  
| table-layout|`fixed`| |  
| text-align | `{ center \| left \| right }` | --- |  
| text-align-last|`{ center \| justify }`| |   
| text-decoration| `{ line-through \| none \| underline };` |   |  
| text-indent| `10px` | |  
| text-overflow | `ellipsis` |  |  
| text-shadow <Top> <Right> <Bottom> <Color> | `{ none };` | `text-shadow: -2px 2px 4px #ccc;` |  
| text-transform | `{ lowercase \| none \| unset \| uppercase };` | --- |  
| top | `{ 10px \| 100% \| auto };` |  |  
| transform | `{ rotate(45deg\|1turn) \| scale(0.25) \| scaleX()  \| translate(-50%, -50%) \| translateZ(0)  }` |  |  
| transform-origin | `{ 0 0 \| bottom \| center \| top } { center \| right \| left }`  |  |  
| transition | `none` | |  
| transition-duration | `<Seconds>s` | --- |  
| top | `{ <Percentage> }` | --- |  
| User-Select | `{ all \| none};` | --- |  
| vertical-align| `{ baseline \| bottom \| middle \| sub \| super \| top } ;` |   | 
| visibility | `{ collapse \| visible };` |  |   
| white-space| `{ normal \| nowrap \| pre \| pre-wrap};`  |   |  
| width| `<Size> \| auto` |   |  
| word-break|`break-all` <br> `break-word`  <br> `normal`| |  
| word-wrap|`{ break-all \| break-word};` | |  
| z-index | `<Integer>;` |  |  
| zoom |  | Deprecated |  

`<Align>`  { center \| end \| flex-end \| flex-start \| left \| right \| space-around \| space-between \| space-evenly \| start };
`<Color>`  { black \| orange \| red \| white };  
`<Integer>` - any Integer value
`<PositiveInteger>` - any positive Integer value or 0
`<Size>`   { none \| em \| en \| px \| % };  
`<Type>`   { solid };  

