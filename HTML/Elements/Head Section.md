# The HTML Head Section

This is where the background details of the page are collected. The Head Section includes the following elements:

- BASE
- LINK
- META
- SCRIPT
- TITLE

## The Head Section Container
```html
<HEAD>
</HEAD>
```
## BASE Element

## LINK Element  
```html
<link rel="canonical" href="https://...">
<link rel="shortlink" href="https://...">
```

### Link Applications
```html
<link rel="search" type="application/opensearchdescription+xml" href="https://wiki.navsea.navy.mil/opensearch/osd.action" title="NAVSEA Wiki">
```

### Link Fonts
```html
<link rel=Stylesheet type="text/css" media=all href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800|PT+Serif:400,700">
```

### Link Manifests
```css
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials">
```

### Link Style Sheets
```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

## META Element

META elements are commonly Key-Value pairs that identify details about the website. These values are used by search engines to evaluate the website. This element is for Search Engine Optimiztion (SEO).

```html
<META charset="utf-8" />
<META http-equiv="content-type" content="text/html; charset=UTF-8" />
<META http-equiv="X-UA-Compatible" content="IE=edge">
<META name="author" content="Michael R. Myers">
<META name="description" content="A TL;DR Project">
<META name="keywords" content="Your Key Search Words" />
<META name="viewport" content="width=device-width, initial-scale=1.0">
<META name="viewport" content="width=device-width,height=500" id="viewportmeta">
???:
<META name="robots" content="noindex"> 
```

## SCRIPT Element

## TITLE Element

