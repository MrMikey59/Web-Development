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

