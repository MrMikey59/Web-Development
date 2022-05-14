# Bootstrap

**Note**: If you use Bootstrap.js, jQuery.js is required!

[Get Bootstrap](https://getbootstrap.com/)
- [Docs 4.1 Grid](https://getbootstrap.com/docs/4.1/layout/grid/)

Training & Blogs:  
- [BootstrapBay](https://bootstrapbay.com/blog)  
  - [Bootstrap 4](https://bootstrapbay.com/blog/tag/bootstrap-4/)  
    - [Bootstrap 4 CDN and Starter Template](https://bootstrapbay.com/blog/day-1-bootstrap-4-cdn-and-starter-template/)  
    - [Bootstrap 4 Grid System](https://bootstrapbay.com/blog/day-2-bootstrap-4-grid-system-tutorial-examples/)
    - [Bootstrap 4 Flex](https://bootstrapbay.com/blog/day-3-bootstrap-4-flex-tutorial-and-examples/)
    - [Bootstrap 4 Typography](https://bootstrapbay.com/blog/day-4-bootstrap-4-typography-tutorial-and-examples/)
    - [Bootstrap 4 Images](https://bootstrapbay.com/blog/day-5-bootstrap-4-images-tutorial-and-examples/)
    - [Bootstrap 4 Buttons](https://bootstrapbay.com/blog/day-6-bootstrap-4-buttons-tutorial-and-examples/)
    - [Bootstrap 4 Inputs](https://bootstrapbay.com/blog/day-7-bootstrap-4-inputs-tutorial-and-examples/)
    - [Bootstrap 4 Forms](https://bootstrapbay.com/blog/day-8-bootstrap-4-forms-tutorial-and-examples/)
    - [Bootstrap 4 Tables](https://bootstrapbay.com/blog/day-9-bootstrap-4-tables-tutorial-and-examples/)
    - [Bootstrap 4 Navbar](https://bootstrapbay.com/blog/day-10-bootstrap-4-navbar-tutorial-and-examples/)
    - [Bootstrap 4 Navigation](https://bootstrapbay.com/blog/day-11-bootstrap-4-navigation-tutorial-and-examples/)
    - [Bootstrap 4 Lists](https://bootstrapbay.com/blog/day-12-bootstrap-4-lists-tutorial-and-examples/)
    - [Bootstrap 4 Cards](https://bootstrapbay.com/blog/day-13-bootstrap-4-cards-tutorial-and-examples/)
    - [Bootstrap 4 Modals](https://bootstrapbay.com/blog/day-14-bootstrap-4-modals-tutorial-and-examples/)
- [Scrimba Bootstrap4](https://scrimba.com/learn/bootstrap4) - sign in using GitHub.  

Themes & Add-Ons:  
- [Bootswatch](http://bootswatch.com)  
- [NuGet](https://www.nuget.org/packages/bootstrap/)  
- [Ruby Gems](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md)  

Typical Local Storage Calls:
```html
<LINK href="bootstrap.min.css" rel="stylesheet" type="text/css">
<SCRIPT src="bootstrap.min.js" type="text/javascript"></SCRIPT>
```

## CDN Calls

### 2.3.2
```html
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
```

### 4.1.3
```html
<!—Bootstrap CDN -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
```

### Additional Wrappers for Bootstrap
-[Wrap Bootstrap](https://wrapbootstrap.com) 

## Containers
These are the building blocks for every section of a bootstrap web page. A container is the root of the Bootstrap 4 grid system and it is used to control the width of the layout; contains all the elements in a page; scales down in width as the screen width narrows and becomes full-width on mobile.

A simple container:
```html
<div id="[UniqueContainerName]" class="container">
</div>
```
Typical CSS for a container:
```css
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px
}
@media (min-width:768px){
  .container{width:750px}
}
@media (min-width:992px){
  .container{width:970px}
}
@media (min-width:1200px){
  .container{width:1170px}
}
```

A fluid container:
```html
<div class="container-fluid">
</div>
```
**Note**: these are full-width and take 100% of the viewport!

## Icons
Early versions of Bootstrap include Glyphicon Halflings.

## Menus & Navigation

### Breadcrumbs
Breadcrumbs are are trail of site locations. Breadcrumbs allow you to return back to a previous page in a web suite. Breadcrumbs are typically listed links in a horizontal lis with the current page listed last.
An example for this page might be:
```
GitHub > MrMikey59 > Web Design > Frameworks > Bootstrap
```
Typical HTML:
```html
<ol class="breadcrumb">
  <li><a href="#">Programs</a></li>
  <li><a href="#">Podcasts</a></li>
  <li class="active">Today's Podcast</li>
</ol>
```
Uses this typical CSS:
```css
.breadcrumb{
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px
}
.breadcrumb>li{
  display:inline-block
}
.breadcrumb>li+li:before{
  content: "/\00a0";  /* The > Separator */
  padding: 0 5px;
  color: #cccccc;
}
.breadcrumb>.active{
  color: #aea79f;
}
```

## Rows, Columns, Spans & Offsets
Bootstrap uses a 12 column box model within a row container.  

Row containers use ```row```. Rows are horizontal slices of the screen and contain columns. Typical CSS settings for a row: 
```css
.row {
  margin-left: -15px;
  margin-right: -15px;
}
```
Columns contain the display data. Columns use ```col[-{xs | sm | md | lg | xl} ][-{1 | 2 | 3 | … | 12} ]```   

Offsets skip over and leave empty columns across a row. Offsets use ```offset[-{xs | sm | md | lg | xl} ]-[ {1 | 2 | 3 | … | 12} ]```.

Spanss use ```span[-{xs | sm | md | lg | xl} ]-[ {1 | 2 | 3 | … | 12} ]```.

![Spans&Offsets](Spans%20%26%20Offsets.PNG)

Breakpoints
|Breakpoint| Description | Size | Max Container  Width |Target |  
| --- | --- | --- | --- | --- |
| xs | Extra Small | <576px | None (Auto) | Small Phones |
| sm | Small | ≥576px | 540px | Large Phones |
| md | Medium | ≥768px | 720px | Tablets |
| lg | Large | ≥992px | 960px | Laptops |
| xl | Extra Large | ≥1200px | 1140px | Desktops |

An example of one row with three unequal columns set for a medium breakpoint:
```html
<div class="row">
  <div class="col-md-3">
  </div>
  <div class="col-md-6">
  </div>
  <div class="col-md-3">
  </div>
</div>
```

An example with an offset:
<div class="row">
  <div class="col-md-5">
  </div>
  <div class="offset-md-2">
  </div>
  <div class="col-md-5">
  </div>
</div>

You can modify columns using alignment.  
- For vertical alignment, use class:
  ```css
  .align-items-{ start | center | end }
  ```
- For horizontal alignment within a column, use class:
  ```css
  .justify-content-{ start | center | end | around | between }
  ```

