# Font Awesome

Font Awesome Free is free, open source, and GPL friendly. You can use it for commercial projects, open source projects, or really almost whatever you want.  

U: Michael.R.Myers1.CTR@navy.mil PHint: 1st QTR 2022
Kit:
```html
<script src="https://kit.fontawesome.com/249fc961f6.js" crossorigin="anonymous"></script>
```

Font Awesome by @davegandy @fontawesome  
307 S. Main St. Suite 202 Bentonville, AR 72712, USA

[Font Awesome](https://fontawesome.com/) 
- [Font Awesome 4](https://fontawesome.com/v4.7/)
- https://github.com/Rush/Font-Awesome-SVG-PNG
- https://github.com/FortAwesome/Font-Awesome  
- [Full Font Awesome Free license](https://fontawesome.com/license)
- [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/icons/)
- [License](http://fontawesome.com/license)
- [Privacy Policy](https://fontawesome.com/privacy)
- [Terms of Service](https://fontawesome.com/tos)

### Required for Icons to show:
```html
<!-- Font Awesome -->
<link href="font-awesome.css" rel="Stylesheet" type="text/css">
<script src="https://kit.fontawesome.com/249fc961f6.js" crossorigin="anonymous"></script>
```
### Kit 1: 
```html
<script src="https://kit.fontawesome.com/8864ea4335.js" crossorigin="anonymous"></script>
``` 

### Kit for FA 4.7
```html
<link rel="stylesheet" href="font-awesome.min.css">
<script src="https://use.fontawesome.com/d504e8709d.js"></script>
```

## Licensing
- **Icons** — CC BY 4.0 License  
    In the Font Awesome Free download, the CC BY 4.0 license applies to all icons packaged as .svg and .js files types.
- **Fonts** — SIL OFL 1.1 License
    In the Font Awesome Free download, the SIL OLF license applies to all icons packaged as web and desktop font files.
- **Code** — MIT License
    In the Font Awesome Free download, the MIT license applies to all non-font and non-icon files.

### Icon Categories
- [Weather Icons](https://fontawesome.com/v6.0/icons?q=weather&s=solid%2Cbrands) 

### Calls to the Icons: (FA – FA Free)
```html
<SPAN class="fa fa-file-excel-o fa-1x"> </SPAN> - Excel Spreadsheets <BR>
<SPAN class="fa fa-file-pdf-o fa-1x"></SPAN> - PDF Documents <BR>
<SPAN class="fa fa-folder-open fa-1x"></SPAN> - Folder<BR>
<SPAN class="fa fa-shield fa-1x"> </SPAN> - Security Access Limited <BR>
```
#### Alternate: (FAS – FA Solid (Free); FAR – FA Regular; FAL – FA Light, & FAD – FA DuoTone)
```html
<I class="fas fa-file-excel fa-1x"></I>
<I class="fas fa-file-pdf fa-1x"></I>
<I class="far fa-folder-open fa-1x"></I>
<I class="fas fa-user-shield fa-1x"></I>
```

## Common Icons

| Icon Name | Link |  
| --- | --- |  
| Angle Down|`<span class="fa fa-lg fa-angle-down"></span>` |  
| Angle Right|`<span class="fa fa-angle-right"></span>` |  
| Avatar (User)|`<i class="fa fa-user"></i>` |  
| Bars|`<span class="fa fa-bars"></span>` |  
| Calendar|`<i class="fa fa-calendar"></i>` |  
| Chevron, Left|`<i class="fa fa-chevron-left"></i>` |  
| Chevron, Right|`<i class="fa fa-chevron-right"></i>` |  
| Download|`<i class="fa fa-download"></i>` |  
| Folder, Open|`<i class="fa fa-folder-open-o"></i>` |  
| Information Circle|`<i class="fa fa-info-circle"></i>` |  
| Plus Circle|`<i class="fa fa-plus-circle"></i>` |  
| Print|`<i class="fa fa-print fa-2x"></i>` |  
| Search|`<span class="fa fa-search fa-inverse fa-lg"></span>` |  
| Share|`<i class="fa fa-share"></i>` <br> `<i class="fa fa-share-alt fa-2x"></i>` |  
| Tag|`<span class="fa fa-tag fa-lg"></span>` |  

## Examples

### Make a Button, Button Group, or a Dropdown Menu Button
```html
<a class="btn" href="#"><i class="icon-repeat"></i> Reload</a>

<div class="btn-group">
  <a class="btn" href="#"><i class="icon-align-left"></i></a>
  <a class="btn" href="#"><i class="icon-align-center"></i></a>
  <a class="btn" href="#"><i class="icon-align-right"></i></a>
  <a class="btn" href="#"><i class="icon-align-justify"></i></a>
</div>

<div class="btn-group open">
  <a class="btn btn-primary" href="#"><i class="icon-user"></i> User</a>
  <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
    <span class="icon-caret-down"></span></a>
  <ul class="dropdown-menu">
    <li><a href="#"><i class="icon-fixed-width icon-pencil"></i> Edit</a></li>
    <li><a href="#"><i class="icon-fixed-width icon-trash"></i> Delete</a></li>
    <li><a href="#"><i class="icon-fixed-width icon-ban-circle"></i> Ban</a></li>
    <li class="divider"></li>
    <li><a href="#"><i class="i"></i> Make admin</a></li>
  </ul>
</div>
```

### Make a Menu
```html
<ul class="nav nav-list">
  <li class="active"><a href="#"><i class="icon-fixed-width icon-home"></i> Home</a></li>
  <li><a href="#"><i class="icon-fixed-width icon-book"></i> Library</a></li>
  <li><a href="#"><i class="icon-fixed-width icon-pencil"></i> Applications</a></li>
  <li><a href="#"><i class="icon-fixed-width icon-cogs"></i> Settings</a></li>
</ul>
```

## HTML Linking
```css
  .fontawesome-icon-list > div {
      float: left;
      margin: 10px 5px 10px 5px;
      width: 15%;
  }
```

```html
<i class="fas fa-camera"></i> <!-- this icon's 1) style prefix == fas and 2) icon name == camera -->
<i class="fas fa-camera"></i> <!-- using an <i> element to reference the icon -->
<span class="fas fa-camera"></span> <!-- using a <span> element to reference the icon -->
<SPAN class="fa fa-caret-down"></SPAN>
<SPAN class="fa fa-home"></SPAN>
```
