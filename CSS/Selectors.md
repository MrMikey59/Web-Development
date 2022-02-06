# CSS Selectors

- [W3School’s CSS Selector]( https://www.w3schools.com/cssref/css_selectors.asp)

CSS uses HTML/SGML commenting like: `/* comment */`

### Browser Conditional Checks
|  Key Check | Comment Embedded Code |  
| --- | --- | 
| IE 7 |`<!--[if IE 7]>` <BR> `<![endif]-->`|  
| IE 8 |`<!--[if IE 8]>` <BR> `<![endif]-->`|  
| IE 9 |`<!--[if IE 9]>` <BR> `<![endif]-->`|  

### Operators in CSS
| Operator | Description |  
| --- | --- |  
| = | Equal |
| != | Not equal |  
| \|= <BR> ^= | Starts with |  
| $= | Ends with |  
| *= <BR> ~= | contains the substring in the attribute |  
| : |  Key-Value Pair separator |  
| :: | Insert |  

### Variables in CSS
Setting variables is CSS uses a Key-Value pair:
```css
/* For Root Values */
:root {
  --hue: 215;
  --sat: 39%;
  --lum: 51%;
  --one: 0;
  --two: 60;
  --three: 120;
  --four: 180;
  --five: 240;
  --six: 300;
  --dark: 30;
  --light: 210;
}
/* For individual selector values */
.accent-1 {
  --this-hue: calc(var(--hue) + var(--one));
  background: hsl(var(--this-hue), var(--sat), var(--lum));
  position:relative;
}
```
Call the variable using the `var()` function. as show:  
```css
hsl(var(--hue), var(--sat), var(--lum))
```

## CSS2

| Selector | Description |  
| --- | --- |  
| * | All Elements |  
| Element <BR> (Single Element) | \<Element> - specific to the element in the selector. |  
| Element * <BR> (Descendant) | All elements within \<Element> |  
| Element1 Element2 <BR> (Descendant) | All \<Element2> within \<Element1> |  
| Element1, Element2 <BR> (List) | A list of applicaple individual elements |  
| Element1 > Element2 <BR> (Parent-Child) | Any \<Element2> with parent  \<Element1> |  
| Element1 + Element2 <BR> (Adjacent) | Any \<Element2> preceded by \<Element1> |  
| .aclass <BR> (Class) | Any Element with Class attribute that includes "aclass" |  
| Element1.aclass <BR> (Class-Combination) | Any \<Element> with Class attribute that includes "aclass" |  
| #anID <BR> (ID) | Any element with the ID attribute set to "anID" |  
| Element#anID <BR> (ID-Combintion) | Any \<Element> with the ID attribute set to "anID" |  
| Element[attr] <BR> (Attribute) | Any \<Element> with an attributr of attr |  
| Element[attr="x"] <BR> (Attribute) | Any \<Element> with an attributr of attr that equals "x" |  
| Element[class="X"] <BR> (Class) | Any \<Element> with an attributr of class that equals "x"  |  
| Element[lang\|="en"] <BR> (Class) | Any \<Element> with an attributr of lang that starts with "en" |  
| Element:PseudoSel | Any Element that meets the PseudoSel criteria |  

**NOTE**: ID can only be used in one Element in one position within a document.  The ID is programatically limited so that only one will be found.

**Note**: The primary selectors listed aboce can also be combined but be aware of the effects!

## Pseudo Selectors
| Selector | Description | Example |  
| --- | --- | --- |  
| :active | active element |  |  
| :after | after element |  |  
| :before  | before element |  |   
| :checked  |  |  |   
| :disabled  |  |  |   
| :enabled  |  |  |   
| :first-child  | first child element |  |   
| :first-letter  | first letter of element |  |   
| :first-line  | first line of element |  |   
| :focus  | Element with focus |  |   
| :hover  | Elemnt with mouse over |  |   
| :lang(var) | Element with language "var" |   
| :last-child |  |  |  
| :link  | Unvisited links |  |   
| :not(<Selector>)  |  |  |   
| :nth-child({ even \| odd \| <Index> })] | Select every other row based on index number |  |   
| :nth-of-type(\<IndexNumber> \| even \| odd)  |  | `#table1 .col:nth-child(even)` |   
| :root | ??? |  |  |  
| :visited | Visited links |  |  |  

**Note**: The anchor pseudo-classes should be declared in the following order: `:link`, `:visited`, `:hover`, `:active`.  

## Responsive Selectors
```css
/* Setup just for Printing */
@media print{
}
/*  responsive set to typical tablet portrait size  */
@media only screen and (max-width:951px){
}
@media all and (max-width: 798px){
}
@media only screen and (max-width: 768px) {
}
@media all and (max-width: 641px){
}
@media all and (max-width: 540px){
}
@media all and (max-width: 480px){
}
/*     responsive set to typical phone portrait size */
@media only screen and (max-width: 400px) {
}
@media all and (max-width: 400px){
}
```

