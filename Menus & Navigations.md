# Menus & Navigation

Any method that provides a User Interface for controlling their web experience.

## Breadcrumbs
A horizontal list of parent pages for easy access. 

## NavBars
A menu pinned to the top of the page or jsut below the Header/Banner.

## Pagination
```html
<div class="center-pager">
  <ul class="pagination">
    <li class="active"><a href="#" <span>1</span></a></li>
    <li><a href="#?Page=2"><span>2</span></a></li>
    <li><a href="#?Page=3"><span>3</span></a></li>
    <li><a href="#?Page=4"><span>4</span></a></li>
    <li><a href="#?Page=5"><span>5</span></a></li>
    <li><a href="#?Page=6"><span>6</span></a></li>
    <li><a href="#?Page=7"><span>7</span></a> </li>
    <li><a href="#?Page=8"><span>8</span></a></li>
    <li><a href="#?Page=9"><span>9</span></a></li>
    <li><a href="#?Page=10"><span>10</span></a></li>
    <li class="disabled"><a href="#">...</a></li>
    <li><a href="#?Page=21"><span>21</span></a></li>
  </ul>
</div>
```
CSS:
```css
.active {
  cursor: pointer;
}
.disabled {
  cursor: none;
}

```

## Side Bars

## Slide Outs

### Notification Slideout with Shadow
Needs a close button and any action links/buttons.
```html
<div class="noticeContainer">
  <div class="noticeSlideOut">
    <div class="noticeLogo">
      <img src="images/TBD.png" alt="NoticeIcon" width="48" height="48">
    </div>
    <h4></h4>Notice Header</h4><p></p>The Notification statement.</p>
  </div>
</div>
```
CSS:
```css
.noticeContainer {
  background:#fff;
  box-shadow:0 1px 2px 0 rgba(65,69,73,.3),
             0 3px 6px 2px rgba(65,69,73,.15);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  float: right;
  flex-basis: 100%;
  min-width: 360px;
  outline: 1px solid transparent;
  overflow: hidden;
  }
.noticeSlideOut {
  display: table;
  margin-bottom: auto;
}
.noticeLogo {
  border-right:1px solid #e8eaed;
  display:table-cell;
  padding-left:16px;
  vertical-align:middle;
  width:72px;
}
.noticeLogo img {
  height:48px;
  padding-left:4px;
  padding-right:20px;
  width:48px
}
```
