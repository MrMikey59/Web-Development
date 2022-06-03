# List Elements
| Element|Notes|Roadmap |  
| --- | --- | --- |  
| Definition List||`<DL>`  <BR> `[  <DT>  </DT>` <BR>   `<DD>  </DD>]…` <BR> `</DL>` |  
| Ordered List|class="lower-alpha-bullets" <BR> class="numbered-bullets" <BR> class="upper-roman-bullets"|`<OL>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR> `</OL>` |  
| Unordered List|class="no-bullets" <BR> class="circle-bullets" <BR> class="square-bullets"|`<UL>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR> `</UL>` |  

## Definition List
```html
<DL> 
[  <DT>  </DT>
  <DD>  </DD>]…
</DL>
```

## Ordered List
```html
<OL>
  <LI>  </LI>
  <LI>  </LI>
  <LI>  </LI>
</OL>
```
class="lower-alpha-bullets"
class="numbered-bullets"
class="upper-roman-bullets"

## Unordered List
```html
<UL>
  <LI>  </LI>
  <LI>  </LI>
  <LI>  </LI>
</UL>
```
class="no-bullets"
class="circle-bullets"
class="square-bullets"

## Remove Gaps in Lists  
Gap between list items – its the most annoying bug for internet explorer.  
You can remove it if you clean all spaces between li and ul elements, o you can just comment those spaces like in example below.  
```html
<ul id="navigation"><!-- 
    --><li><a href="">Sign up</a></li><!-- 
    --><li><a href="">Orders</a><!-- 
        --><ul><!-- 
            --><li><a href="">Dashboard</a></li><!-- 
            --><li><a href="">Order list</a></li><!-- 
        --></ul><!-- 
    --></li><!-- 
    --><li><a href=""><span><span>My account</span></span></a><!-- 
        --><ul><!-- 
            --><li><a href="">Dashboard</a></li><!-- 
            --><li><a href="">Profile</a></li><!-- 
            --><li><a href="">Change password</a></li><!-- 
        --></ul><!-- 
    --></li><!-- 
--></ul> 
```

## Examples

### Footer Horizontal List with Custom Separators

To get this type of list in your footer:
![Footer List](FooterList.png)

Use:
```html
<div id="footer" role="contentinfo" style="margin-left: 285px;">
  <section class="footer-body">
    <ul id="footer-list">
      <li class="noprint">Powered by <a href="#" target="_blank">The Confluence</a></li>
      <li class="print-only">Printed by The Confluence</li>
      <li class="noprint"><a href="#" target="_blank">Report Bugs</a></li>
      <li class="noprint"><a href="#" target="_blank">News</a></li>
      <li class="noprint"><a href="#" target="_blank">Home&amp;Support</a></li>
    </ul>
  </section>
</div>
```

```css
#footer{
  background: 0;
  box-sizing: border-box;
  clear: both;
  color:var(--lesser-body-text);
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
}
#footer .footer-body {
  background-image: none;
  color: var(--lesser-body-text);
  font-size: 12px;
  line-height: 1.66666667;
  margin: 20px 0;
  min-height: 44px;
  padding: 0 10px 21px;
  text-align: center;
}
#footer .footer-body>p, 
#footer .footer-body>ul {
  margin:10px 0 0;
}
#footer .footer-body>p:first-child,
#footer .footer-body>ul:first-child {
  margin: 0;
}
#footer .footer-body>ul{
  display: block;
  font-size: 0;
  list-style: none;
  padding: 0;
}
#footer .footer-body>ul>li{
  Display: inline-block;  /* makes the list horizontal */
  font-size: 12px;
  line-height: 1.66666667;
  padding: 0;
  white-space: nowrap;
}
#footer .footer-body>ul>li+li{
  margin-left:10px  /* Adds spacing between the list items. */
}
/* Set the List Separator, Clear last. */
#footer .footer-body>ul>li:after {
  content:"🚀";
  margin-left:10px;
  speak:none
}
#footer .footer-body>ul>li:last-child:after{
  display:none
}
#footer-list {
  border-top: 0;
  background: 0;
}
```

