# CSS Keywords & Values

**Note**: Color keywords are not covered in this document. Go to the [Color document](https://github.com/MrMikey59/00---Projects/blob/master/Web%20Design/Color.md) in Web Design.

| Keyword (Attribute) | Description |  
| --- | --- |  
| align-self | `center` |  
| animation <BR> -moz-appearance <BR> -webkit-appearance | `buffering-stripes 2s linear infinite` <BR> `Build 1.5s cubic-bezier(0.5, 0, 0.5, 1.5) 1` |  
| animation-delay | `<Time>` |  
| appearance | `none` |
| background | `none \| transparent \| url() \| no-repeat \| repeat` |  
| background-color | `transparent` |  
| background-image | `url()` |  
| background-position | postion of the top left corner <BR> `<XPos> <YPos>` |  
| background-repeat | `no-repeat \| repeat-x \| repeat-y` |  
| background-size | `<Size> <Size>` | 
| border <BR> - border-bottom <BR> - border-left <BR> - border-right<BR> - border-top  | `<Size> <BorderType> <Color> \| none ` |  
| border-bottom-right-radius <BR> border-bottom-left-radius | `<Size>` |  
| border-radius <BR> -moz-border-radius <BR> -webkit-border-radius| `<Size> \| inherit` |  
| box-shadow | `none` |  
| box-sizing | `border-box` |  
| clear| determines the horizontal use of space on the sides of an element <BR> `both \| left \| right ` |  
| color| `inherit \| <HexColor> \| hsl() \| rgb() \| rgba() ` |  
| [content](https://developer.mozilla.org/en-US/docs/Web/CSS/content) |  |  
| [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) | CORS compliance <BR> `crossorigin=[ “anonymous"` | “use-credentials” | “” ]` |  
| cursor | `default \| N-resize \| pointer` |  
| display | `block \| flex \| inherit \| inline \| inline-block \| table-cell` |  
| [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) | applies graphical effects like blur or color shift to an element |  
| flex |  
| flex-basis | `<Size>` |  
| flex-wrap | `wrap` |  
| float| `left \| right` |  
| font <BR> - font-size <BR> - font-weight <BR> - font-family |   `<Size> <Weight> <Family>` <BR> `<Size>` <BR> `bold \| normal \| <WeightValue>` <BR> `monospace \| sans-serif \| serif ` | 
| [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) | `normal \| italic \| oblique \| oblique 40deg`  |  
| height | `<Size>` |  
| [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) | `center \| space-around \| space-between \| space-evenly \| start` |  
| left |  |  
| letter-spacing | `<Size>` |  
| line-height| `<Size>` |  
| list-style | `{ decimal \| disc \| none } [ outside ]` |  
| list-style-type | `none` |  
| margin <BR> - margin-bottom <BR> - margin-left <BR> - margin-right<BR> - margin-top  |  |  
| max-width | `<Size>` |  
| min-height| `<Size>` |  
| opacity | `none` or `<OpValue>` |  
| outline| `none \| <Weight> <OutlineType> <Color>` |  
| [outline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset) |  |  
| overflow | `hidden \| inherit` |  
| overflow-y | `scroll` |  
| padding <BR> - padding-bottom <BR> - padding-left <BR> - padding-right<BR> - padding-top  | `<TSize> <RSize> <BSize> <LSize>` <BR> `<TBSize> <LRSize>` <BR> `<AllSize>` |  
| pointer-events | `none` |  
| position | `absolute \| fixed \| relative \| static \| sticky` 
| text-align | `center \| initial \| left \| right` |  
| text-decoration | `none  \| underline` |  
| text-indent | `<Size>` |  
| text-overflow | `ellipsis` |  
| [text-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering) <BR> The text-rendering property is an SVG property that is not defined in any CSS standard.  | `/* Keyword values */` <BR>  `text-rendering: auto;` <BR> `text-rendering: optimizeSpeed;` <BR> `text-rendering: optimizeLegibility;` <BR> `text-rendering: geometricPrecision;` <BR> `/* Global values */` <BR>  `text-rendering: inherit;` <BR> `text-rendering: initial;` <BR> `text-rendering: revert;` <BR> `text-rendering: unset;` |  
| text-transformation | `lowercase \| uppercase` |  
| top |  |  
| transform |  |  
| transform-origin | `center` |  
| transition <BR> -webkit-transition | `{all \| background \| opacity} [ ease \| ease-in \| ease-in-out ] <Time> ` <BR> `background ease-in-out .2s` |  
| vertical-align | `bottom \| middle \| top` |  
| visibility | `hidden \| visible` |  
| white-space | `nowrap` |  
| width | `auto` |  
| z-index | `<Integer>` |  
| *zoom|  |  

|Constants|Description|Value|Type |
| --- | --- | --- | --- |  
| !important  | used to add more importance to a property/value than normal. <BR> **NOTE**: If you use the !important rule, it will override ALL previous styling rules for that specific property on that element! | --- | override |  
| absolute|||position |
| block|override for inline elements|| display |
| bold||| font weight |
| both||| clear |
| circle||| list-style-type |
| dashed||| border-style |
| device-width ||| width |
| disc||| list-style-type |
| dotted||| Various: <BR> - border-style <BR> - Outline |
| double||| border-style |
| groove||| border-style |
| hidden||| border-style |
| inherit ||| Various: <BR> - color <BR> -  display  <BR> -  font-family |
| inline|override for block elements|| display |
| inset||| border-style |
| italic||| font style |
| large ||| font size |  
| left ||| Various: <BR> - float | 
| line-through||| text decoration |
| list-item||| display |
| lowercase||| text-transform |
| medium ||| font size |
| none||| Various: <BR> Various: <BR> - display <BR> - list-style-type |
| normal||| Various: <BR> - font-style <BR> - font-weight |
| optimizelegibility ||| text-rendering | 
| outset||| border-style |
| overline||| text decoration |
| relative||| position |
| ridge||| border-style |
| small ||| font size |
| solid|Default|| border-style |
| square||| list-style-type |
| table ||| display |  
| table-footer-group||| display |
| table-header-group||| display |
| thin ||| Various: <BR> - outline | 
| underline||| text decoration |
| uppercase||| text-transform |
| x-large ||| font size |
| x-small ||| font size |
| xx-large||| font size |
| xx-small ||| font size |

## Overload Pattern
```css
div {
  background: gray;
  background: linear-gradient(to bottom, white 0%, black 100%);
}
```
This pattern is often used to give browsers that don’t understand linear gradients a fallback solution (e.g. gray color in the example). 
**NOTE**: In CSSOM, `background: gray` gets overwritten. 

