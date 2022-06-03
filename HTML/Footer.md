# Body Section Footer

```css
#footer {
  clear:both;
  float:left;
  width:100%;
}
#footer .footer-body {
  color:#7a869a;
  font-size:12px;
  line-height:1.66666667;
  margin:20px 0;
  margin-left:auto;
  margin-right:auto;
  min-height:44px;
  padding:0 10px 21px 10px;
  text-align:center;
  width:980px;
}
#footer-logo{
  margin-top:20px;
}
```

```html
<footer id="footer" role="contentinfo">
  <section class="footer-body">
    <ul id="footer-list">
      <li>Copyright © 2009- </li>
    </ul>
    <div id="footer-logo"></div>
  </section>
</footer>
```

Get the full Year:
```javascript
document.write(new Date().getUTCFullYear());
```

## Social Media List

Requires BootStrap & HPsprites.png
```html
<div id="socialMediaLinks" class="row">
  <div id="facebook">
    <a href="https://www.facebook.com/[FBUserID]">  </a>
  </div>
  <div id="twitter">
    <a href="https://twitter.com/[TWUserID]">  </a>
  </div>
  <div id="flickr">
    <a href="https://www.flickr.com/[FLUserID]">  </a>
  </div>
  <div id="youTube">
    <a href="https://www.youtube.com/[YTUserID]">
  </div>
  </a>
</div>
```
```css
#socialMediaLinks {
  bottom: 0;
  padding-bottom: 30px;
  padding-top: 10px;
  padding-left: 70%;
}
#socialMediaLinks div {
  margin-right: 10px;
}
#facebook {
  width: 30px;
  height: 40px;
  background: url('images/HPsprites.png');
  background-position: 0;
}
#twitter {
  width: 48px;
  height: 40px;
  background: url('images/HPsprites.png');
  background-position: -30px;
}
#flickr {
  width: 43px;
  height: 40px;
  background: url('images/HPsprites.png');
  background-position: -125px
}
#youTube {
  width: 44px;
  height: 40px;
  background: url('images/HPsprites.png');
  background-position: -256px;
}
```

## Status Bar

Requires Bootstrap, row & col are Bootstrap classes
```html
<!-- InfoStatus Bar -->
<div id="Status" class="row">
  <div class="col">
    <p>STATUS</p>
  </div>
</div> <!-- End of InfoStatus Bar -->
```
```css
#Status{
  background-color:#ff6122;
  text-align:center;
}
#Status a:link,
#Status a:visited,
#Status a:active,
#Status a:hover{
  color: #ff0;
}
```

