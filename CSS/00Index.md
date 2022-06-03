# CSS: Cascade Style Sheets

This folder contains CSS notes, snippets and example code.

Does CSS allow aliasing to combine several classes? No use JS to add/remove classes!  

CSS seems deceptively straightforward, but there are many challenges when trying to style an app perfectly for all browsers and all screen sizes. CSS-Grid and Flexbox are tools that have been developed to make the job a little more structured and more reliable. Learn about these tools by playing [Flexbox Froggy](https://flexboxfroggy.com/) and [Grid Garden](https://codepip.com/games/grid-garden/).

CSS is a container of Rules that modify the browser display of elements.

#### To Check Out
```css
behavior: url('/homepages/comp_sys_sup/include/css/PIE.htc');
```

#### Training Available
[The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) 
- Data files on [GitHub](https://github.com/missing-semester/missing-semester)
- Lectures on [Hacker Tools](https://hacker-tools.github.io/lectures/)
- Video recordings of the lectures are available [YouTube](https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J)

## Common Support
[Mozilla](https://www.mozilla.org/en-US/)
- [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/) 
- [Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) 
- [MDN on GitHub](https://github.com/mdn/) 

### Common Alternatives
- [CCS Object Model (CSSOM)](https://drafts.csswg.org/cssom/) 
- [Google Cast API Reference]( https://developers.google.com/cast/docs/reference) or [Alt]( https://developers.google.com/cast) 
- [Less](http://lesscss.org/) (Run `npm install -g less` to install).
  - [Less Plugin: Clean CSS](https://github.com/less/less-plugin-clean-css)  
  (Run `npm install -g less-plugin-clean-css` to install).
- SASS
- SCSS

### Minimizers, Parser & Stringifiers
https://nv.github.io/CSSOM/docs/parse.html (from https://github.com/NV/CSSOM) 
[CSSTree]( https://github.com/csstree/csstree) 
[ReworkCSS](https://github.com/reworkcss/css)  

## Stringify the Ugly CSS 

#### Using Notepad
Use the `Search > Replace` with the following:
1. `{`  becomes  `{\n  `  (two spaces at end)
2. `}`  becomes `\n}`
3. `;`  becomes `;\n  `  (two spaces at end)

#### Using MS Word
Use the `Search > Replace` with the following:
1. `{`  becomes  `{^p  `  (two spaces at end)
2. `}`  becomes `^p}`
3. `;`  becomes `;^p  `  (two spaces at end)

## Rules
The Rule: Each rule has exactly two parts:

-	a selector that defines the HTML element(s) to which the rule applies
-	a collection of one or more properties, which describes the appearance of all elements in the document that match the selector.

**Note**: An HTML element can belong to multiple classes if you wish, simply by listing the classes (separated by spaces) in the class attribute. 

**Note**: Element IDs are required to be unique and for a single instance.

#### CSS Conventions
- [CSS property order](http://markdotto.com/2011/11/29/css-property-order/)  
- Multiple-line approach (one property and value per line)  
- Always a space after a property's colon  
- End all lines with a semi-colon  
- For multiple, comma-separated selectors, place each selector on its own line  
- Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quote  
- Organiztion (in alphabetical order with Comments to mark sections!)
    ```css
    /* Resets */
    /* Anchors */
    /* Containers */
    /* IDs for Containers */
    /* IDs for Forms */
    /* IDs for Tables */  
    /* Specialty IDs */
    /* Classes for Containers */
    /* Classes for Forms */
    /* Classes for Tables */
    /* Specialty Classes */
    ```
  - Any Resets.
  - Standard Element Selectors
  - #ID Selectors (only used once!)
  - .Class Selectors

#### CSS Implementation
Style can be implemented in three ways: Internal, Inline and External.
All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

  1. Inline style (inside an HTML element)
  2. External and internal style sheets (in the head section)
  3. Browser default

###### Internal (Anywhere in document)
```css
<style type="text/css">
<CSSRules>
</style>
```

###### In Line
```css
<<ElementName> style=<RuleList>>
```

###### External (In head Section only)
```css
<link href="<FilePathName>" rel="stylesheet" type="text/css" />
```

#### CSS Rules

CSS Rule for a Paragraph![CSS P Rule](https://github.com/MrMikey59/00---Projects/blob/master/CSS/CSS%20Rule%20Example.png)
```css
<STYLE type="text/css"> 
p {
  font-weight: bold;
  color: blue; 
}
</STYLE>
```

#### Selector Format
```css
<ElementName>
<ElementName>.<ClassName>
.<ClassName>
#<IdentificationName>
```

#### The Box Model
The Box![The CSS Box Model](CSS%20Box%20Model.png)   
The CSS2 Box![CSS2 Box](CSS2%20Box%20Model.png)  
**Note**: The visible width of the box is determined by adding together the content width, the padding and the border.

## The Attribute Roadmaps
| Attribut Roadmap | Examples
| --- | --- |  
| `align-items: [ center ];` | --- |  
| `display: [ block \| flex ];` | --- |  
| `font-family: [ Arial ];` | --- |  
| `justify-content: [ center ];` | --- |  
| `position: [ absolute \| relative ];` | --- |  
| `text-decoration: [ none ];` | --- |  

## Adapting to Media Size
```html
/*  Mobile  */
@media screen (max-width: 767px) {
  <Adaptive CSS Script>
}
/*  Tablet  */
@media screen and (min-width: 768px) and (max-width: 1199px) {
  <Adaptive CSS Script>
}
/*  Tablet and Laptop/Desktop  */
@media screen and (min-width: 768px) {
  <Adaptive CSS Script>
}
/*   Laptop/Desktop  */
@media screen and (min-width: 1200px) {
}
```

## CSS Examples

#### Drop Cap a Leading Paragraph
```css
P:first-letter {
  font-size: 150%;
}
```

#### Make Borders Bold, Dotted and Purple
```css
.bolddottedborder {
  border-width: 10px;
  border-style: dotted;
  border-color: purple;
}
```

#### Header 1 Reset
```css
H1 {
  font-size: x-large;
  background-color: navy;
  color: white;
  padding-top: 2em;
  padding-bottom: .2em;
  padding-left: .4em;
}
```

## Examples

#### Circles CSS Example

-	[Circles CSS Example.html](https://github.com/MrMikey59/00---Projects/blob/master/CSS/Circles/Circles%20CSS%20Example.html)
-	[Circles.css](https://github.com/MrMikey59/00---Projects/blob/master/CSS/Circles/css/circle.css)

A CSS package for creating circle representations with percentages of completion.

# Pseudo-Class
|Attribute | Example |
| --- | --- | 
| First Child	| :first-child{ } |
| Last Child	:last-child{ } |

# Common CSS Attributes

## Align
|Attribute | Example |
| --- | --- | 
| Align Content | `align-content: flex-start;` | 
| Align Items | `align-items:{ center | flex-end };` | 
| Align Self | `align-self: center;` | 
| Text-Align | `text-align: center;` |  
| Vertical Align | `vertical-align: baseline;` |  

```css
/* Text Alignment */
.ta-center{
  text-align: center;
}
.ta-left{
  text-align: left;
}
.ta-right{
  text-align: right;
}
```

## Background
```css
background-color: #fdfdfd;
background-image: radial-gradient(circle, #ddd 1px, rgba(0,0,0,0) 1px); /* dotted background */
background-size: 1rem 1rem;
background-color: #FAE042;
background-color: rgba(250, 224, 66, .2);
background-color:#172b4d;
background-color: #7C5A0B;
background-color: #A77B0E;
```

## Border
Common Templates:
```css
  border-color: inherit;
  border-radius: .5rem;
  border-style: solid;
  border-width: 3px;
```
Short Form:
```css
  border: 0 1px 0 0;
```
Long Form
```css
  border-top: 0;
  border-right: 1px;
  border-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-left: 0;
```

## Box Sizing
```css
box-sizing: border-box;
```

## Content 
```css
content: attr(data-charcode);
content: attr(char);
content: "";
```

## Cursor
```css
cursor: { copy | crosshair | grab | grabbing | move | not-allowed | pointer };
```

## Direction
```css
 [dir=ltr] <Class> {
  left:40%;
  padding-right:24px;
}
[dir=rtl] <Class> {
  padding-left:24px;
  right:40%;
}
```

## Display
```css
display: { block | flex | grid | inline | inline-block | inline-flex };
```

## Flex
|Attribute | Example |
| --- | --- | 
| Flex Basis	| flex-basis: 250px; |
| Flex Direction | flex-direction: { column | row } | 
| Flex Grow	| flex-grow :1; |
| Flex Shrink	| flex-shrink: 0;|
| Flex Wrap	| flex-wrap: wrap; |

## Font
|Attribute | Example |
| --- | --- | 
| font-weight: | bold; |
| font-family:|  monospace; |
| font-size: | 1.2rem; |

## Height & Width
|Attribute | Example |
| --- | --- | 
| Maximum Width	| `max-width:650px;` |   
| Minimum Height	| `min-height:144px;` |   
| Minimum Width	| `min-width:365px;` |    

## Justify
```css
justify-content: { center | flex-end | space-around | space-between | space-evenly };
```

## Page Break
```css
page-break-inside: avoid;
```

Paragraphs
```css
P {
  display: block;
}
```

## Position

### Viewport Position
|Attribute | Example |
| --- | --- | 
| Bottom	| bottom: 50%; | 
| Left	| left: 50%; | 
| right	| right: 50%; | 
| Top	| top: 10px; | 

## Tables
```css
table {
  border: 1px solid #CCC;
  border-collapse: collapse;
}
td {
  border: none;
}

.td-15{
  width: 15%;
}
.td-50{
  width: 50%;
}
.td-70{
  width: 70%;
}
```

## Text Modification
|Attribute | Example |
| --- | --- | 
| Text Decoration  | `text-decoration: { overline | underline };` |
| Text Transform | `text-transform: uppercase;` |

## Text-overflow
```css
text-overflow: ellipsis;
```

## Transform
```css
transform: rotate(90deg) translateX(-3px);
transform: translateY(-2px);
```

## Transition
```css
transition: max-height .25s ease-in-out;
```

## Unicode
```css
unicode-bidi: isolate;
```

## User Select
```css
user-select: none;
user-select: text;
```