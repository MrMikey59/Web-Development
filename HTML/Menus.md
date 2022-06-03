# Menu.CSS

Menu Test: https://www.digitalocean.com/community/tutorials/css-collapsible

### Mega Menu Navigation
- https://designmodo.com/create-css3-mega-menu/ 
- https://www.w3schools.com/howto/howto_css_mega_menu.asp 

This is the primary stylesheet & scripts for the NavBar and is maintained by the EB Webmaster. Menu.js required jQuery.  

Include these link in the HEAD Section:  
```html
<link type="text/css" href="css/menu.css" rel="Stylesheet">
<script type="text/javascript" src="js/menu.js"></script>
```
A Content-Box Model with Mega Menu; requires menu.js & jQuery.  

Use this Class:

- dropdown_1column - Sets a dropdown menu width of 1 column 140px
- dropdown_2columns - Sets a dropdown menu width of 2 columns 280px
- dropdown_3columns - Sets a dropdown menu width of 3 columns 420px
- dropdown_4columns - Sets a dropdown menu width of 4 columns 560px
- dropdown_5columns - Sets a dropdown menu width of 5 columns 700px
- col_1 - Sets a column width of 1 column  130px
- col_2 - Sets a column width of 2 columns 270px
- col_3 - Sets a column width of 3 columns 410px
- col_4 - Sets a column width of 4 columns 550px
- col_5 - Sets a column width of 5 columns 690px

**Note**: Dropdowns will adjust to be left or right justified automatically based on position and width of the browser window.

Additional Classes:
.align_right
.black_box
.clicked
.drop
.greybox
.img_left
.imgshadow
.italic
.jqhover
.menu_right
.strong

## Form Menus

### Select Menu
```html
<h3>HTML SELECT dropdown</h3>
<select name="LDeptMenu" id="menu1">
  <option value="" selected="selected">L dept links</option>
  <option value="https://www.cnn.com">CNN</option>
  <option value="https://www.abcnews.com">ABC</option>
  <option value="https://www.cbsnews.com">CBS</option>
  <option value="https://www.foxnews.com">FOX</option>
</select>
```
The required script:
```javascript
var urlmenu = document.getElementById( 'menu1' );
urlmenu.onchange = function() {
  if(this.selectedIndex != 0) {
    window.open( this.options[ this.selectedIndex ].value )
  };
};
```

## Menu Item Separations
```html
<span>▸</span>
```

## Pure CSS Menus

### Menu Container
```html
<div class="topMenu">
  [Menu List]
</div>
```
```css
.topMenu {
}
```

### Menu List
Simple:
```html
<ul>
  [MenuListItems]
</ul>
```
Drop Down Menu:
```html
<li class="dropdown">
  <a href="javascript:void(0);" class="dropbtn">Contacts</a>
  [DropMenuContentList]
</li>
```

### Menu List Items
```html
<li> [AnchorItem] </li>
```

### DropMenu Content List
```html
<div class="dropdown-content">
  [MenuList]
</div>
```

### Quick Launch Menu
```html
<div id="QuickLaunchMenu" class="noindex ms-core-listMenu-verticalBox">
  <ul id="LeftSideMenu" class="root ms-core-listMenu-root static">
    <li class="static">
      <span class="menu-item-text"> [MenuItem] </span>
      <ul class="static">
        [SubMenuList]
      </ul>
    </li>
  </ul>
</div>
```

### Title & Left Justified Menu
```html
<DIV class="header-primary"> <!-- Left Justified Menu Bar -->
  <!-- Menu Bar -->
  <ul class="nav" style="width: auto;">
    <li>
      <a id="space-menu-link" class="aui-dropdown2-trigger aui-nav-link" aria-controls="space-menu-link-content" aria-haspopup="true" role="button" title="Spaces" tabindex="0" data-aui-trigger="" resolved="" aria-expanded="false" href="#space-menu-link-content">Spaces</a>

<div id="space-menu-link-content" class="aui-dropdown2 aui-dropdown2-in-header aui-layer" role="menu" resolved="" tabindex="-1" hidden="">
  <ul class="nav">
    <li>Another Submenu</li>
    <li><a id="view-user-profile-link" href="#" title="">Profile</a></li>
    <li><a id="view-mytasks-link" href="#n" title="">Tasks</a></li>
    <li><a id="user-settings-link" href="#" title="">Settings</a></li>
    <li><a id="quizzes-link" href="#" title="">Quizzes</a></li>
    <li><a id="courses-link" href="#" title="">Courses</a></li>
  </ul>
</div>
    </li>
    <li><a href="#" class=" nav-imagelink" title="Calendars"><span>Marbles</span></a></li>
  </ul>
</DIV> <!-- End of Left Justified Menu BarSection -->
```

