# Table Elements
| Element|Notes|Roadmap |  
| --- | --- | --- |  
| Table|A collection of Table Rows that may also have a Table Header <BR> class="alt-rows"|`<TABLE class="<Class>" id="<IDName>">  </TABLE>` |  
| Table Header|A Special Row|`<TR>` <BR>   `<TH>Header 1</TH>` <BR>   `<TH>Header 2</TH>` <BR> `[  <TH>Header 3</TH >]…` <BR> `</TR>` |  
| Table Row|A collection of Table Cells|`<TR>` <BR>   `<TD>Cell 1</TD>` <BR>   `<TD> Cell </TD>` <BR> `[  <TD>Cell 3 </TD >]…` <BR> `</TR>` |  
| Table Cell|Components of a Table Row|`<TD>  </TD>` |  
| Table Body | to contain the tables body section | <TBODY></TBODY> |  

## Table Container
```html
<TABLE>  </TABLE>
```
A Table contains a collection of Rows and may also have a special Table Header row.
class="alt-rows"

## Table Header 
```html
<TR>
  <TH>Header 1</TH>
  <TH>Header 2</TH>
[  <TH>Header 3</TH >]…
</TR>
```

## Table Row
```html
<TR>
  <TD>Cell 1</TD>
  <TD> Cell </TD>
[  <TD>Cell 3 </TD >]…
</TR>
```
Rows are a collection of Table Cells.

## Table Cell
```html
<TD>  </TD>
```
Table cells are components of a Table Row.

## Table Template
```html
<TABLE width="100%" cellspacing="1">
  <TBODY>
    <TR>
      <TH></TH>
      <TH></TH>
      <TH></TH>
      <TH></TH>
    </TR>
    <TR>
      <TD></TD>
      <TD></TD>
      <TD></TD>
      <TD></TD>
    </TR>      
    <TR>
      <TD colspan="4">No data to present.</TD>
    </TR>
  </TBODY>
</TABLE>
```

```css
table {
  position: relative;
}
th,
td,
hr,
thead,
tbody {
  border-color: #ccc;
  background: #fff;
}

tr {
  position: inherit;
}
td {
  position: inherit;
  word-wrap: break-word;
}
```

## Table Expanded Templates
```html
<table style="padding-top: 7px; width:100%; border-collapse: collapse; border-spacing: 0;">
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>
```
```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
    </tr>
  </tbody>
</table>
```

