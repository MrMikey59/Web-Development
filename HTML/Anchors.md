# HTML Anchors

Referencing Note: “#” refers to the current document (page), so #<Location> will take you to the location in the document. For a location in the document called “_Top”, a <Location> is defined by an Anchor element such as:
<A name="_top”></A>

## Common Anchors
```html
<a href="https://www.facebook.com/" title="Facebook" target="_blank"><span>Facebook</span>&nbsp;</a>
<a href="https://www.pinterest.com/" title="Pinterest" target="_blank"><span>Pinterest</span>&nbsp;</a>
<a href="https://www.linkedin.com/" title="LinkedIn" target="_blank"><span>LinkedIN</span>&nbsp;</a>
<a href="https://youtube.com/" title="YouTube" target="_blank"><span>YouTube</span>&nbsp;</a>

<a href="https://support.office.com/en-us/">MS Office Support</a>
```

## Examples using Anchors
### Skip to Main Content
```html
<a class="skippy" href="#content">
  <span class="skippy-text">Skip to main content</span>
</a>
```
Later in document:
```html
<main class="container" id="content">
  <a name="content"></a>
  [Content]
</main>
```
Associated CSS:
```css
.skippy{
  display:block;
  padding:1em;
  color:#fff;
  text-align:center;
  background-color:#563d7c;
  outline:0
}
.skippy:hover{
  color:#fff
  }
.skippy-text{
  padding:.5em;
  outline:1px dotted
}
```