# Panes Container

```html
<DIV class="pane">
</DIV>
```

```css
.pane ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
.pane ul li {
  display: inline;
  margin: 0px 1px 0px 0px;
}
.pane ul a {
  background: url("images/tab-left.jpg") no-repeat left top rgb(185, 202, 225);
  color: rgb(84, 114, 154);
  font-size: 10px;
  font-weight: bold;
  padding: 2px 0px 3px 10px;
}
.pane h1 b {
  background: url("images/tab-left.jpg") no-repeat left top rgb(185, 202, 225);
  color: rgb(84, 114, 154);
  font-size: 10px;
  font-weight: bold;
  padding: 2px 0px 3px 10px;
}
.pane ul a span {
  background: url("images/tab-right.jpg") no-repeat right top rgb(185, 202, 225); padding: 3px 10px 0px 0px;
}
.pane h1 {
  background: url("images/tab-right.jpg") no-repeat right top rgb(185, 202, 225); padding: 3px 10px 0px 0px;
}
.pane ul a:hover {
  background: url("images/tab-left-on.jpg") no-repeat left top rgb(38, 105, 241); color: rgb(255, 255, 255);
}
.pane ul li.ui-tabs-selected a {
  background: url("images/tab-left-on.jpg") no-repeat left top rgb(38, 105, 241); color: rgb(255, 255, 255);
}
.pane ul a:hover span {
  background: url("images/tab-right-on.jpg") no-repeat right top;
}
.pane ul li.ui-tabs-selected a span {
  background: url("images/tab-right-on.jpg") no-repeat right top;
}
div.pane div h1 {
  background: rgb(204, 204, 204); margin: 0px; padding: 7px; text-align: center; color: rgb(0, 0, 0); font-size: 16px; font-weight: bold; text-decoration: none;
}
div.pane div.pane {
  background: rgb(255, 255, 255); margin: 0px; padding: 15px 10px; border: 1px solid rgb(38, 105, 241); border-image: none;
}
div.pane span div h1 {
}
```
