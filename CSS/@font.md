# @ Font-Face

#### Preload Fonts with <LINK>
```html
<link rel="preload" href="https://aui.atlassian.com/aui/7.8/css/fonts/adgs-icons.woff" as="font">
<link rel="preload" href="https://aui.atlassian.com/aui/7.8/css/fonts/adgs-icons.ttf" as="font">
<link rel="preload" href="https://aui.atlassian.com/aui/7.8/css/fonts/adgs-icons.eot" as="font">
```

```css
@font-face {
  font-family: 'slick';
  font-weight: normal;
  font-style: normal;
  src: url('./fonts/slick.eot');
  src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), 
       url('./fonts/slick.woff') format('woff'),
       url('./fonts/slick.ttf') format('truetype'),
       url('./fonts/slick.svg#slick') format('svg');
}
```

## Font Families
- cursive
- fantasy
- monospace
- sans-serif
- serif

| cursive | fantasy | serif | sans-serif | monospace |  
| --- | --- | --- | --- | --- |  
| Amatic SC <BR> [Overlock](#Overlock) |  | Times New Roman | Arial <BR> Geneva <br> Google Sans <br> Helvetica, Helvetica Neue <BR> Lucida Sans Unicode <BR> Noto Sans <BR> Open Sans <BR> Oswald <BR> [Proxima Nova](#Proxima%20Nova) <BR> [Roboto](#Roboto) <BR> Segoe UI <BR> Symantec Sans <BR> Verdana <BR> Work Sans | Andale Mono <BR> Courier <BR> Courier New
 |  

[Amatic](#Amatic)
[America](#America)
[Lato](#Lato)
Lucida Grande
Lucida Sans Unicode

## Amatic SC (Cyrillic, Hebrew, Latin, Latin-ext & Vietnamese)
```css
/* cyrillic */
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZyzwprpvBS1izr_vOEDuSfQZQ.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZ3zwprpvBS1izr_vOMscGKerUC7WQ.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* hebrew */
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZyzwprpvBS1izr_vOECOSfQZQ.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
}
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZ3zwprpvBS1izr_vOMscGKfLUC7WQ.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* latin */
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZyzwprpvBS1izr_vOECuSf.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZyzwprpvBS1izr_vOEBOSfQZQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZ3zwprpvBS1izr_vOMscGKcLUC7WQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* vietnamese */
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZyzwprpvBS1izr_vOEBeSfQZQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/amaticsc/v22/TUZ3zwprpvBS1izr_vOMscGKcbUC7WQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
```

## America
```css
@font-face {
  font-family: 'America';
  font-style: normal;
  font-weight: 400;
  src: local('America Regular'),
       local('America-Regular'),
       url(https://c5.patreon.com/external/fonts/gt-america/GT-America-Standard-Regular.woff2) format('woff2'),
       url(https://c5.patreon.com/external/fonts/gt-america/GT-America-Standard-Regular.woff) format('woff');
}

@font-face {
  font-family: 'America';
  font-style: normal;
  font-weight: 700;
  src: local('America Bold'),
       local('America-Bold'),
       url(https://c5.patreon.com/external/fonts/gt-america/GT-America-Standard-Bold.woff2) format('woff2'),
       url(https://c5.patreon.com/external/fonts/gt-america/GT-America-Standard-Bold.woff) format('woff');
}
```
  
## BentonSans
```css
@font-face{font-family:BentonSans;font-weight:300;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Light-6dccf00b06936bd0fb2913d5e7279816-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Light-56973edfcf61447fc1ffeb7a6eb6b178-font.woff) format("woff")}
@font-face{font-family:BentonSans;font-weight:300;font-style:italic;src:url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Light-Italic-36b388f18999631c032ceeade2312d41-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Light-Italic-112953068bc678d61f4553a1184561f0-font.woff) format("woff")}
@font-face{font-family:BentonSans;font-weight:400;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Regular-10f4d2158069741ac4ddbc45710381a1-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Regular-e6bbcdd30d3bd4d6b170bcb6d3552cab-font.woff) format("woff")}
@font-face{font-family:BentonSans;font-weight:400;font-style:italic;src:url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Italic-a79b88d69296747b773f0e224cc42ea1-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Italic-5267af566ab853eb9d74db1a78a46c67-font.woff) format("woff")}
@font-face{font-family:BentonSans;font-weight:500;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Medium-d7c31b2e9ada52f5ad11194858e44a93-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Medium-1051a531d3e1ee3483a6533158557139-font.woff) format("woff")}
@font-face{font-family:BentonSans;font-weight:500;font-style:italic;src:url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Medium-Italic-9abd3f23e60e4f632817ebdff606b8ec-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Medium-Italic-a25d440012460eb8883e539f93040fa7-font.woff) format("woff")}
@font-face{font-family:BentonSans;font-weight:700;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Bold-91e4c20cbb21e802d984a5ca6ac174a0-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Bold-c34ba754b7235b49d33b294ff7a54179-font.woff) format("woff")}
@font-face{font-family:BentonSans;font-weight:700;font-style:italic;src:url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Bold-Italic-fc6d8a3f6499b32d9a6be03168b8066f-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/BentonSans/Bold-Italic-255b4934a1f414dd312aa89382d65114-font.woff) format("woff")}
```

## Calibri
```css
@font-face {
	font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-469750017 -1073732485 9 0 511 0;
}
```

## Cambria Math  
```css
 @font-face {
	font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:3 0 0 0 1 0;
}
```

## Font Awesome
```css
@font-face {
  font-family: 'Font Awesome 5 Brands';
  font-style: normal;
  font-weight: normal;
  font-display: auto;
  src: url("../webfonts/fa-brands-400.eot");
  src: url("../webfonts/fa-brands-400.eot?#iefix") format("embedded-opentype"), url("../webfonts/fa-brands-400.woff2") format("woff2"), url("../webfonts/fa-brands-400.woff") format("woff"), url("../webfonts/fa-brands-400.ttf") format("truetype"), url("../webfonts/fa-brands-400.svg#fontawesome") format("svg"); }
@font-face {
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: url("../webfonts/fa-regular-400.eot");
  src: url("../webfonts/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("../webfonts/fa-regular-400.woff2") format("woff2"), url("../webfonts/fa-regular-400.woff") format("woff"), url("../webfonts/fa-regular-400.ttf") format("truetype"), url("../webfonts/fa-regular-400.svg#fontawesome") format("svg"); }

@font-face {
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 900;
  font-display: auto;
  src: url("../webfonts/fa-solid-900.eot");
  src: url("../webfonts/fa-solid-900.eot?#iefix") format("embedded-opentype"), url("../webfonts/fa-solid-900.woff2") format("woff2"), url("../webfonts/fa-solid-900.woff") format("woff"), url("../webfonts/fa-solid-900.ttf") format("truetype"), url("../webfonts/fa-solid-900.svg#fontawesome") format("svg"); }
  ```

## Google Material Icons
```css
@font-face {
  font-family: 'Google Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/googlematerialicons/v104/Gw6kwdfw6UnXLJCcmafZyFRXb3BL9rvi0QZG3Q.woff2) format('woff2');
}

.google-material-icons {
  font-family: 'Google Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga';
  -moz-osx-font-smoothing: grayscale;
}
```

## IBMPlexSans
```css
@font-face {
  font-family: 'IBMPlexSans';
  font-weight: normal;
  font-style: normal;
  src: url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-ibmplexsans-regular-39e1a74bab.woff2') format('woff2'), url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-ibmplexsans-regular-5a469cfacd.woff') format('woff');
}
@font-face {
  font-family: 'IBMPlexSans';
  font-weight: 500;
  font-style: normal;
  src: url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-ibmplexsans-medium-93cde5cb70.woff2') format('woff2'), url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-ibmplexsans-medium-926e6b23b6.woff') format('woff');
}
@font-face {
  font-family: 'IBMPlexSans';
  font-weight: bold;
  font-style: normal;
  src: url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-ibmplexsans-bold-47d0880913.woff2') format('woff2'), url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-ibmplexsans-bold-736188bb57.woff') format('woff');
}```

## Lato
```css
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u-w4BMUTPHjxsIPx-mPCLQ7A.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u-w4BMUTPHjxsIPx-oPCI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u_w4BMUTPHjxsI9w2_FQft1dw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u_w4BMUTPHjxsI9w2_Gwft.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u8w4BMUTPHjxsAUi-qJCY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u8w4BMUTPHjxsAXC-q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u_w4BMUTPHjxsI5wq_FQft1dw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u_w4BMUTPHjxsI5wq_Gwft.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u_w4BMUTPHjxsI3wi_FQft1dw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u_w4BMUTPHjxsI3wi_Gwft.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u8w4BMUTPHh30AUi-qJCY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u8w4BMUTPHh30AXC-q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh50XSwaPGR_p.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh50XSwiPGQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

## MS PGothic
```css
@font-face
	{font-family:"MS PGothic";
	panose-1:2 11 6 0 7 2 5 8 2 4;
	mso-font-charset:128;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-536870145 1791491579 134217746 0 131231 0;}
@font-face
	{font-family:"\@MS PGothic";
	mso-font-charset:128;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-536870145 1791491579 134217746 0 131231 0;}
```

## Noto Mono
```css
@font-face{
  font-family: Noto Mono;
  font-weight: 400;
  font-style: normal;
  src: url(https://www.redditstatic.com/desktop2x/fonts/NotoMono/Regular-b16bb0524a7e7ee597970333c0c67180-font.woff2) format("woff2"),
       url(https://www.redditstatic.com/desktop2x/fonts/NotoMono/Regular-e6bbcdd30d3bd4d6b170bcb6d3552cab-font.woff) format("woff")
}
@font-face{
  font-family: Noto Mono;
  font-weight: 400;
  font-style: normal;
  src: url(https://www.redditstatic.com/desktop2x/fonts/NotoMono/el-Regular-29d72243d2cd6145b28bcb80dc33f0e4-font.woff2) format("woff2"),
       url(https://www.redditstatic.com/desktop2x/fonts/NotoMono/el-Regular-06ee3f893717454d11a16c3e8d0aa9f9-font.woff) format("woff");
  unicode-range:U+0370-03ff,U+1f??
}```

## Noto Sans
```css
@font-face {
  font-family: 'Noto Sans';
  src: url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-notosans-notosans-923ab93982.woff2') format('woff2'), url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-notosans-notosans-49dd5c1e17.woff') format('woff'), url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-notosans-notosans-d29e1ec47e.ttf') format('truetype'), url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-notosans-notosans-0c237dfb54.svg') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```
## Open Sans
```css
@font-face {
  font-family:"Open Sans";
	panose-1:2 11 6 6 3 5 4 2 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-536870161 1073750107 40 0 415 0;
}
```

## Omnes-Pro (Adobe)
```css
@font-face{
  font-family:omnes-pro;
  src:url(https://use.typekit.net/af/570fe7/000000000000000000012863/21/l?subset_id=2&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/570fe7/000000000000000000012863/21/d?subset_id=2&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/570fe7/000000000000000000012863/21/a?subset_id=2&fvd=n4&v=3) format("opentype");
  font-weight:400;font-style:normal;font-stretch:normal;font-display:auto;}@font-face{font-family:omnes-pro;src:url(https://use.typekit.net/af/894210/000000000000000000012861/21/l?subset_id=2&fvd=n3&v=3) format("woff2"),url(https://use.typekit.net/af/894210/000000000000000000012861/21/d?subset_id=2&fvd=n3&v=3) format("woff"),url(https://use.typekit.net/af/894210/000000000000000000012861/21/a?subset_id=2&fvd=n3&v=3) format("opentype");
  font-weight:300;font-style:normal;font-stretch:normal;font-display:auto;}@font-face{font-family:omnes-pro;src:url(https://use.typekit.net/af/44d911/000000000000000000012865/21/l?subset_id=2&fvd=n5&v=3) format("woff2"),url(https://use.typekit.net/af/44d911/000000000000000000012865/21/d?subset_id=2&fvd=n5&v=3) format("woff"),url(https://use.typekit.net/af/44d911/000000000000000000012865/21/a?subset_id=2&fvd=n5&v=3) format("opentype");
  font-weight:500;font-style:normal;font-stretch:normal;font-display:auto;}@font-face{font-family:source-code-pro;
  src:url(https://use.typekit.net/af/4bd05c/000000000000000000013297/21/l?subset_id=2&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/4bd05c/000000000000000000013297/21/d?subset_id=2&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/4bd05c/000000000000000000013297/21/a?subset_id=2&fvd=n4&v=3) format("opentype");
  font-weight:400;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
.omnes-pro{font-family:"omnes-pro",sans-serif;}
```

## Overlock (Latin & Latin-ext)
```css
/* latin */
@font-face {
  font-family: 'Overlock';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XTDmdMWRiN1_T9Z7Tc2O6skw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Overlock';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XQDmdMWRiN1_T9Z7Tc0FWJhr6j8Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Overlock';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XQDmdMWRiN1_T9Z7Tc0G2Lhr6j8Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XVDmdMWRiN1_T9Z7TZ6Ow.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XSDmdMWRiN1_T9Z7xizfmLtrw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XSDmdMWRiN1_T9Z7xaz_mLtrw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Overlock';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XQDmdMWRiN1_T9Z7Tc0FWJhrCj8RLT.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Overlock';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XTDmdMWRiN1_T9Z7Tc2OCsk4GC.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Overlock';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XQDmdMWRiN1_T9Z7Tc0G2LhrCj8RLT.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XVDmdMWRiN1_T9Z7TX6Oy0lw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XSDmdMWRiN1_T9Z7xizfmFtry79Q.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overlock/v13/Z9XSDmdMWRiN1_T9Z7xaz_mFtry79Q.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
```

## Proxima Nova
```css
@font-face{
  font-family:'ProximaNova';
  src:url("../../fonts/Proxima-Light/267447_4_0.eot?321123597");
  src:url("../../fonts/Proxima-Light/267447_4_0.eot?123597#iefix") format("embedded-opentype"),url("../../fonts/Proxima-Light/267447_4_0.woff?123597") format("woff"),url("../../fonts/Proxima-Light/267447_4_0.ttf?123597") format("truetype")
}
@font-face{
  font-family:'ProximaNova';
  font-weight:bold;
  src:url("../../fonts/Proxima-Semibold/267447_5_0.eot?123597");
  src:url("../../fonts/Proxima-Semibold/267447_5_0.eot?#iefix123597") format("embedded-opentype"),url("../../fonts/Proxima-Semibold/267447_5_0.woff?123597") format("woff"),url("../../fonts/Proxima-Semibold/267447_5_0.ttf?123597") format("truetype")
}
@font-face{
  font-family:'ProximaNova-Semibold';
  src:url("../../fonts/Proxima-Semibold/267447_5_0.eot?123597");
  src:url("../../fonts/Proxima-Semibold/267447_5_0.eot?#iefix123597") format("embedded-opentype"),url("../../fonts/Proxima-Semibold/267447_5_0.woff?123597") format("woff"),url("../../fonts/Proxima-Semibold/267447_5_0.ttf?123597") format("truetype")
}
```

## PT Serif
```css
@font-face {
	font-family:"PT Serif";
	mso-font-charset:0;
	mso-generic-font-family:auto;
	mso-font-pitch:auto;
	mso-font-signature:0 0 0 0 0 0;
}
```

## Reddit Sans
```css
@font-face {
  font-family: 'Reddit Sans';
  src: url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-redditsans-redditsans-regular-48854d9ae7.woff2') format('woff2');
}
@font-face {
  font-family: 'Reddit Sans';
  font-weight: bold;
  font-style: normal;
  src: url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-redditsans-redditsans-bold-c4a5ab79eb.woff2') format('woff2');
}
@font-face {
  font-family: 'Reddit Sans';
  font-weight: 800;
  font-style: normal;
  src: url('https://www.redditstatic.com/crypto-assets/v2/-core-styles-fonts-redditsans-redditsans-extrabold-5d96a4e524.woff2') format('woff2');
}
@font-face{font-family:RedditSans;font-weight:400;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-Regular-f6da4a74985e726695c5550b2a96360d-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-Regular-938c6d17d3195feb74fbfcbf6d028c47-font.woff) format("woff")}
@font-face{font-family:RedditSans;font-weight:700;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-Bold-00b9ceb8410bb0559de9132fb8c5ddbd-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-Bold-919ed023cc331c1b982510dce87edaf0-font.woff) format("woff")}
@font-face{font-family:RedditSans;font-weight:600;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-SemiBold-fcee61fe0a8b9eb173d0b097bdf1be07-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-SemiBold-a8cf195e6dc5180d834bd4ba84701907-font.woff) format("woff")}
@font-face{font-family:RedditSans;font-weight:800;font-style:italic;src:url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-ExtraBoldItalic-0346885b2f9e13f7d733268cb8916a8c-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-ExtraBoldItalic-84b1042d8aac344ee8f4d25444049aa7-font.woff) format("woff")}
@font-face{font-family:RedditSans;font-weight:800;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-ExtraBold-a6a549325ce2e7248e5bf8997bbde759-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/RedditSans/RedditSans-ExtraBold-6633c8402da41892cddf755223abb785-font.woff) format("woff")}
```

## Roboto
```css
@font-face{
font-family:'Roboto';
  font-style:normal;
  font-weight:400;
  src:url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2)format('woff2');
  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;
  }
@font-face{
font-family:'Roboto';
  font-style:normal;
  font-weight:400;
  src:url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2)format('woff2');
  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
  }
@font-face{
font-family:'Roboto';
  font-style:normal;
  font-weight:400;
  src:url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2)format('woff2');
  unicode-range:U+1F00-1FFF;
  }
@font-face{
font-family:'Roboto';
  font-style:normal;
  font-weight:400;
  src:url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2)format('woff2');
  unicode-range:U+0370-03FF;
  }
@font-face{
font-family:'Roboto';
  font-style:normal;
  font-weight:400;
  src:url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2)format('woff2');
  unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;
  }
@font-face{
font-family:'Roboto';
  font-style:normal;
  font-weight:400;
  src:url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2)format('woff2');
  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;
  }
@font-face{
font-family:'Roboto';
  font-style:normal;
  font-weight:400;
  src:url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2)format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
  }
  ```
```javascript
<script name="www-roboto" >
if (document.fonts && document.fonts.load) {
  document.fonts.load("400 10pt Roboto", "E"); 
  document.fonts.load("500 10pt Roboto", "E");
  }
</script>
```

## Spreadsheets-Icon-Font
```css
@font-face {
  font-family: 'Spreadsheets-Icon-Font';
  src: url(data:font/ttf;base64,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) format('truetype'), url(data:font/woff;base64,d09GRgABAAAAAB5oAAsAAAAAHhwAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKGNtYXAAAAFoAAAAVAAAAFQXVtKlZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAGPgAABj4+mE2SWhlYWQAABq8AAAANgAAADYXdRnMaGhlYQAAGvQAAAAkAAAAJAgBBB5obXR4AAAbGAAAAIwAAACMgAIEnGxvY2EAABukAAAASAAAAEh17HusbWF4cAAAG+wAAAAgAAAAIAA+AUduYW1lAAAcDAAAAjoAAAI6u3qapHBvc3QAAB5IAAAAIAAAACAAAwAAAAMD4AGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6R4DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOke//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAwAA/8AEAAPAAAQACAARAAABIREhESEzESMBIREzESERMxcDgPyABAD+AICAAYD9AEACQEs1A8D8AAOA/wD+AAMA/sABQDUAGQAA/8AEAAPAAAQACQANABMAGAAdACMAJwAsADEANgA7AEEARQBLAE8AVABhAGYAawBwAHUAegB/AIQAAAEzFSM1ATMVIzUBMxUjARUjFTM1ATMVIzUBMxUjNQMzFTM1IxMzFSMBMxUjNQczFSM1FTMVIzUBMxUjNSEjNSMVMyUzFSMBNTM1IxURMxUjEzMVIzUhIzUjFSMVMxUzNTM1BzMVIzURMxUjNREzFSM1ATMVIzUhMxUjNSEzFSM1AzMVIzUD5hoa/OdmZgIAZmYBGUxm/ZrMzAJMGhpMTBpmTBoa/OdmZs0aGhoaAZrMzP7MTBpmAmdmZv1NTGYaGs1mZgGZWRpZWRpZcxoaGhoaGgGnZmb8ZmZmAs1mZtoaGgLzZmb85xoaA+Ya/IBMGmYDmhoa/mbMzAGATGb9M2YDMxoazWZmzczM/bQaGkxmGhoDmkwaZv2ZZgFAGhpZWRpZWRraZmYCAGZm/TNmZgGnGhoaGhoaAfNmZgAAAAAaAAD/wAQAA8AABAAJAA0AEwAYAB0AIwAnACwAMQA2ADsAQQBFAEsATwBUAGEAZgBrAHAAdQB6AH8AhACIAAABMxUjNQEzFSM1ATMVIwEVIxUzNQEzFSM1ATMVIzUDMxUzNSMTMxUjATMVIzUHMxUjNRUzFSM1ATMVIzUhIzUjFTMlMxUjATUzNSMVETMVIxMzFSM1ISM1IxUjFTMVMzUzNQczFSM1ETMVIzURMxUjNQEzFSM1ITMVIzUhMxUjNQMzFSM1IREjEQPmGhr852ZmAgBmZgEZTGb9mszMAkwaGkxMGmZMGhr852ZmzRoaGhoBmszM/sxMGmYCZ2Zm/U1MZhoazWZmAZlZGllZGllzGhoaGhoaAadmZvxmZmYCzWZm2hoa/nNmAvNmZvznGhoD5hr8gEwaZgOaGhr+ZszMAYBMZv0zZgMzGhrNZmbNzMz9tBoaTGYaGgOaTBpm/ZlmAUAaGllZGllZGtpmZgIAZmb9M2ZmAacaGhoaGhoB82Zm/AAEAAAAABoAAP/ABAADwAAEAAkADQATABgAHQAjACcALAAxADYAOwBBAEUASwBPAFQAYQBmAGsAcAB1AHoAfwCEAIgAAAEzFSM1ATMVIzUBMxUjARUjFTM1ATMVIzUBMxUjNQMzFTM1IxMzFSMBMxUjNQczFSM1FTMVIzUBMxUjNSEjNSMVMyUzFSMBNTM1IxURMxUjEzMVIzUhIzUjFSMVMxUzNTM1BzMVIzURMxUjNREzFSM1ATMVIzUhMxUjNSEzFSM1AzMVIzUpARUhA+YaGvznZmYCAGZmARlMZv2azMwCTBoaTEwaZkwaGvznZmbNGhoaGgGazMz+zEwaZgJnZmb9TUxmGhrNZmYBmVkaWVkaWXMaGhoaGhoBp2Zm/GZmZgLNZmbaGhr+DQQA/AAC82Zm/OcaGgPmGvyATBpmA5oaGv5mzMwBgExm/TNmAzMaGs1mZs3MzP20GhpMZhoaA5pMGmb9mWYBQBoaWVkaWVka2mZmAgBmZv0zZmYBpxoaGhoaGgHzZmZmAAAAGgAA/8AEAAPAAAQACQANABMAGAAdACMAJwAsADEANgA7AEEARQBLAE8AVABhAGYAawBwAHUAegB/AIQAiAAAATMVIzUBMxUjNQEzFSMBFSMVMzUBMxUjNQEzFSM1AzMVMzUjEzMVIwEzFSM1BzMVIzUVMxUjNQEzFSM1ISM1IxUzJTMVIwE1MzUjFREzFSMTMxUjNSEjNSMVIxUzFTM1MzUHMxUjNREzFSM1ETMVIzUBMxUjNSEzFSM1ITMVIzUDMxUjNSERIxED5hoa/OdmZgIAZmYBGUxm/ZrMzAJMGhpMTBpmTBoa/OdmZs0aGhoaAZrMzP7MTBpmAmdmZv1NTGYaGs1mZgGZWRpZWRpZcxoaGhoaGgGnZmb8ZmZmAs1mZtoaGgINZgLzZmb85xoaA+Ya/IBMGmYDmhoa/mbMzAGATGb9M2YDMxoazWZmzczM/bQaGkxmGhoDmkwaZv2ZZgFAGhpZWRpZWRraZmYCAGZm/TNmZgGnGhoaGhoaAfNmZvwABAAAAAAaAAD/wAQAA8AABAAJAA0AEwAYAB0AIwAnACwAMQA2ADsAQQBFAEsATwBUAGEAZgBrAHAAdQB6AH8AhACIAAABMxUjNQEzFSM1ATMVIwEVIxUzNQEzFSM1ATMVIzUDMxUzNSMTMxUjATMVIzUHMxUjNRUzFSM1ATMVIzUhIzUjFTMlMxUjATUzNSMVETMVIxMzFSM1ISM1IxUjFTMVMzUzNQczFSM1ETMVIzURMxUjNQEzFSM1ITMVIzUhMxUjNQMzFSM1ASEVIQPmGhr852ZmAgBmZgEZTGb9mszMAkwaGkxMGmZMGhr852ZmzRoaGhoBmszM/sxMGmYCZ2Zm/U1MZhoazWZmAZlZGllZGllzGhoaGhoaAadmZvxmZmYCzWZm2hoa/g0EAPwAAvNmZvznGhoD5hr8gEwaZgOaGhr+ZszMAYBMZv0zZgMzGhrNZmbNzMz9tBoaTGYaGgOaTBpm/ZlmAUAaGllZGllZGtpmZgIAZmb9M2ZmAacaGhoaGhoB82Zm/GZmAAcAAP/ABAADwAAEABAAFAAZAB0AIQAmAAATMxUjNSUjFSMVMxUzNTM1IwczFSMRMxUjNRMzFSMBIREhJREhESHNZmYBPRRcXBRcXBQZGRkZ12ZmATP8AAQA/GYDNPzMAcoZGVxcFFxcFNdmAmZmZv7XGQIP/ABmAzT8zAAWAAD/wAQAA8AABAAIAAwAEQAVABkAHgAjACcALQAyADcAPQBBAEYASwBQAFUAWwBfAGUAaQAAEyEVITURIRUhESEVIQEzESMRITMRIwEzESMBMxUjNQEzFSM1ATMVIwEVIxUzNQEzFSM1ATMVIzUDMxUzNSMTMxUjATMVIzUHMxUjNRUzFSM1ATMVIzUhIzUjFTMlMxUjATUzNSMVETMVIwAEAPwABAD8AAQA/AABzWZmAc1mZvxmZmYD5hoa/OdmZgIAZmYBGUxm/ZrMzAJMGhpMTBpmTBoa/OdmZs0aGhoaAZrMzP7MTBpmAmdmZv1NTGYaGgHzZmYBzWb8zGYEAPwABAD8AAQA/AADM2Zm/OcaGgPmGvyATBpmA5oaGv5mzMwBgExm/TNmAzMaGs1mZs3MzP20GhpMZhoaA5pMGmb9mWYAAAAABQBC//4DmgOIAAMACAAMABAAHgAACQMJBCcHFzcJAiEBDgEjIiYnMTQ2MTAWFQHQAUb+uv66AUb+cgGOAY7+cm0kbST+ugFGAUb9dAMQBCwdHiwDTU0C0v67/roBRgGO/nL+cQGPAY5tJWwk/nL+ugFG/t0dJycdHWxsHQAAAAAHACr/8wPNA40AAwAHAEEAbwCpANcA4wAAJSEVIScXEQcBFhQVFAYHNw4BIyoBIzMqASMiJicxLgE1PAE1MTU0JjU0NjcHPgEzOgEzMToBMzIWFxUeARUUBhU1BzY0NTQmJxcuASMxIgYHMQ4BFRwBFTUVHAEVFBYXJx4BFzE+ATcxPgE1NCY1FSUcARUUBgc3DgEjKgEjMSoBIyImJyMuATU8ATcxNSY0NTQ2Nwc+ATMwMjMxOgEzMhYXFR4BFRwBFTUHPAE1NCYnFy4BJzEiBgcjDgEVHAEVNRUUBhUUFhcnHgEXMT4BNzE+ATU8ATUVBxQGIyImNTQ2MzIWAQACzf0zzc3NAQABEREBDTMfAQICAQECAR8yDhASARIQAQ0xHwIDAgECAh4yDRESATwBCgkBBh4TEx4FCQoKCgEFHhQTHQUJCgEBoxAQAQ0xHwECAQEBAR8xDAEPEgEBERABDDIfAgEBAgEeMQ0QEToJCQEFHBITHAQBCAkBCAgBBBwTEhwFCQnDHhYVHh4VFh7AZjOaATOZAb4FDAYrUSUDGyEfGiNPKgUJBF4FDAYqUCQCGiEfGQEhTikFCAUBAQQJBR44GwMSFxYSGDcdBAcEAXEDCAQeOhsCExgBARcRGjkeAwcEARAFDAcqUSUDGyEfGiNPKgUJBF4FDAYqUCQCGiEfGQEhTSoECQUBAQQJBR05GwMSFgEXERg3HgMHBAFxBg0GHDUZAxIYAgEXERo5HwMGBAHhFh4eFhUeHgAAAAAJACr/8wPNA40AAwAHAEEAbwCpANcBCgE4AUQAACUhNSEXJxE3ARYUFRQGBzcOASMqASMzKgEjIiYnMS4BNTwBNTE1NCY1NDY3Bz4BMzoBMzE6ATMyFhcVHgEVFAYVNQc2NDU0JicXLgEjMSIGBzEOARUcARU1FRwBFRQWFyceARcxPgE3MT4BNTQmNRUlHAEVFAYHNw4BIyoBIzEqASMiJicjLgE1PAE3MTUmNDU0NjcHPgEzMDIzMToBMzIWFxUeARUcARU1BzwBNTQmJxcuAScxIgYHIw4BFRwBFTUVFAYVFBYXJx4BFzE+ATcxPgE1PAE1FSUcARUUBgc3DgEjIiYnNS4BNTQ2NTE1JjQ1NDY3Bz4BMzoBOQE6ATMyFhcVHgEVHAEVNQc8ATU0JicXLgEjMSIGBzEOARUUFhU1FQYUFRQWFyceARcxPgE3MT4BNTwBNRUFFAYjIiY1NDYzMhYDAP0zAs3Nzc39ZgEREQENMx8BAgIBAQIBHzIOEBIBEhABDTEfAgMCAQICHjINERIBPAEKCQEGHhMTHgUJCgoKAQUeFBMdBQkKAQGjEBABDTEfAQIBAQEBHzEMAQ8SAQEREAEMMh8CAQECAR4xDRAROgkJAQUcEhMcBAEICQEICAEEHBMSHAUJCQFwEBABDjMfHzQNEBIBAREQAQ0xHwECAQICHTENEBE6CQkBBR4TEhwFCAoBAQkJAQQcExMcBAkJ/goeFhUeHhUWHlpmM5n+zZoBvgUMBitRJQMbIR8aI08qBQkEXgUMBipQJAIaIR8ZASFOKQUIBQEBBAkFHjgbAxIXFhIYNx0EBwQBcQMIBB46GwITGAEBFxEaOR4DBwQBEAUMBypRJQMbIR8aI08qBQkEXgUMBipQJAIaIR8ZASFNKgQJBQEBBAkFHTkbAxIWARcRGDceAwcEAXEGDQYcNRkDEhgCARcRGjkfAwYEARAFDAcqUSUDGyAgGgEiTyoECAReBQwGKlAkAhohHxkBIU0qBAkFAQEECQUdORsDEhcXERg3HgMHBAFxBAoEHjgbAxIYAgEXERo5HwMGBAHhFh4eFhUeHgAAAAMAMwAmA80DgwADAAcACwAACQMBNxcHBSEVIQJc/eEBGQIf/RHSz9ECd/xmA5oDg/3h/ucCH/760dDROjQAAAACAF4AKgOmA2AAHgArAAA3EyM3Mzc+ATc+ATMeARcHLgEjIgYHDgEPATMHIwMjATczAxMjJwcjEwMzF2BWWA1YCQchGxtHKxEiEQwMGg0YKQ8QEwMJdg12Vl8CN5t05ItoXqF064ZoWCoB70tEK0MYGhgBBARQAwMPEA8pGTlL/hIBas/+4v7k1dUBJQEVzwADAIAAFAOAA2sAAwAHAAsAADchFSEBCwEhByMRM4ADAP0AAmXl5QHKn4yMtaEB//7bASUKAWIAAAMAgAASA4ADbgADAAYACgAAEyEVIRsCEQsBIYADAP0Am+Xl5eUBygIQoP6iASX+2wNc/tsBJQAAAwCAABQDgANrAAMABgALAAABITUhARsBJTMRIxEDgP0AAwD9m+Xl/tWMjALLoP4CASX+2wr+nQFjAAAABABAAAADwAOAAA8AEwAXABsAABMhMhYVERQGIyEiJjURNDYBFSE1ARUhNQEVITXAAoA1S0s1/YA1S0sBdQFA/sABQP7AAUADgEs1/YA1S0s1AoA1S/6AgIABAICA/gCAgAAAAAUAQAAAA8ADgAAPABMAFwAbAB8AABMhMhYVERQGIyEiJjURNDYTFSE1ARUhNRMVITUBFSE1wAKANUtLNf2ANUtLNQEA/wABAIABAP8AAQADgEs1/YA1S0s1AoA1S/6AgID/AICAAQCAgP8AgIAAAAABASABMgLgAkEAGQAAAQcOASMiJicxJyY0NzYyFzEXNzYyFzEWFAcC4MIGEAgIEAbCDQ0NJQ2hoQ0lDQ0NAgHCBwYGB8INJg0NDaGhDQ0NJg0AAAACAFUAFQOrA2sAHAA2AAAlIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGIwMGFB8BHgEzMjY/ATY0JyYiDwEnLgEjIgYHAgBYTk50ISIiIXROTlhYTk50ISIiIXROTlieDQ19BxEJCREHfQ0NDCMNYmIGEAgIEAYVIiF0Tk5YWE5OdCEiIiF0Tk5YWE5OdCEiAfQNIw1+BwcHB34MJAwNDWJjBgYGBgACAAD/wAQAA8AAIQAnAAABOAExIgcOAQcGFRQXHgEXFjMyNz4BNzY1MTQnLgEnJiMxAwE3FxMXAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWom/vBsiuaBA8AoKIteXWpqXV6LKCgoKIteXWpqXV2LKSj8ugEQbYoBY1MAAwAA/8AEAAPAAB0AIAAjAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1MTQnLgEnJiMDIQETESECAGpdXosoKCgoi15dampdXosoKCgpil5daij+kwFtUAFtA8AoKIteXWpqXV6LKCgoKIteXWpqXV6KKSj+JgFs/NwBbAAAAAMAAP/ABAADwAAdACAAIwAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTE0Jy4BJyYjAyEBBSEBAgBqXV6LKCgoKIteXWpqXV6LKCgoKYpeXWr5AWz+lAHy/pQBbAPAKCiLXl1qal1eiygoKCiLXl1qal1eiiko/vn+lIYBbAACAAD/wAQAA8AAIQAtAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1OAE5ATQnLgEnJiMxASMVIzUjNTM1MxUzAgBqXV6LKCgoKIteXWpqXV6LKCgoKYtdXWoBD7W0tbW0tQPAKCiLXl1qal1eiygoKCiLXl1qal1eiygo/aa1tbS1tQAAAAAFAAD/wAL6A8AABwALAA8AEwAXAAABNSEVIxUhNSUzFSMHESERASMRMxMjETMCKv6lzwL6/hnU1OYCoP5wTEzMTUwDH6Ghf39dXbH9UgKu/dEBsP5QAbAABgAA/8ACZAPAAAsAFwAjAC8AOwBHAAATFAYjIiY1NDYzMhYRFAYjIiY1NDYzMhYRFAYjIiY1NDYzMhYBFAYjIiY1NDYzMhYRFAYjIiY1NDYzMhYRFAYjIiY1NDYzMhb3SDM0SEg0M0hIMzRISDQzSEgzNEhINDNIAW1INDNISDM0SEg0M0hIMzRISDQzSEgzNEgDRDNISDM0SEj+SDNJSTMzSUn+STRISDQzSEgC1TNISDM0SEj+SDNJSTMzSUn+STRISDQzSEgAAAAAAQAA/8AEJAPAAAYAABMBESURASEAAWMBXwFi+9wDwP2a/mZbAT8CZgAAAAACAAD/wAQkA8AABQALAAAFEQEhAREJARE3EQEBY/6dBCT+nv35ARSHARRAAZkCZ/2Z/sIDOf4i/tYjAQcB3gAABQAA/8AD9wPAAAMABwALABAAFAAABSERIQEhESEFIRUhFSEVITURIRUhA/f98gIO/k8BU/6t/boBP/7BAT/+wQE//sFABAD8XgNEHF75Xl7+qV4AAgAA/8AEPgPDAEAAfgAAJSInLgEnJjU0NjcVFw4BFRQWMzI2NzU3PgE1NCYjIgYHFSc2Nz4BNzYzMhceARcWFRQGBzcHBgcOAQcGIzAiOQEFIicuAScmNTQ2Nwc3Njc+ATc2MzIXHgEXFhUUBgc3Jz4BNTQmIyIGDwIOARUUFjMyNj8BFwYHDgEHBiMxAqM9NTZQFxgCAnMBAWlKNFQXcgoLaEs1VhZoEhwbRSgnLD02NlAXFxIRAXETGxtEKCcrAf6EPTY2UBcXERABchIcG0QnKCo+NTZQFxgDAgFzAQJpSjRVFgFxCQpoSjRVFgFnExsbRCgnK5MXGFA1Nj0NGAwCEgcOB0toNSsB3xIsF0ppOC0BNCUfHisMDBcXUDY2PSZGHwLfJB4dKwsM0xcXUTU2PSVFHgLfJB0eKgsMFxdRNTY9DRoMARQHEAlKaTYsAd8RKhZKaTYrATQlHR4rCwwAAAAJAAD/wAQpA8AAAwAHAAwAEQAWABsAHwAjACgAABMhESEVIREhFSERIREBIREhEREhESERESERIREBIREhFSERIRUhESERAAEX/ukBF/7pARf+6QGJARf+6QEX/ukBF/7pAYkBF/7pARf+6QEX/ukDwP7pXf7oXf7pARcC6f7pARf+jP7oARj+i/7pARcC6f7pXf7oXf7pARcAAAABAAAAARmaWmDEcV8PPPUACwQAAAAAANoL3dkAAAAA2gvd2QAA/8AEPgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAQ8AAD//gQ+AAEAAAAAAAAAAAAAAAAAAAAjBAAAAAAAAAAAAAAAAgAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAQgQAACoEAAAqBAAAMwQAAF4EAACABAAAgAQAAIAEAABABAAAQAQAASAEAABVBAAAAAQAAAAEAAAABAAAAAL6AAACZAAABCQAAAQkAAAD9wAABDwAAAQpAAAAAAAAAAoAFAAeAEIBAAHEAogDTAQQBE4E8gUyBlIH6AgICFAIbAiICKYI2AkQCToJjgnMCgoKSAqKCrYLHAsyC1ILfAwuDHwAAQAAACMBRQAaAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABABYAAAABAAAAAAACAAcA5wABAAAAAAADABYAYwABAAAAAAAEABYA/AABAAAAAAAFAAsAQgABAAAAAAAGABYApQABAAAAAAAKABoBPgADAAEECQABACwAFgADAAEECQACAA4A7gADAAEECQADACwAeQADAAEECQAEACwBEgADAAEECQAFABYATQADAAEECQAGACwAuwADAAEECQAKADQBWFNwcmVhZHNoZWV0cy1JY29uLUZvbnQAUwBwAHIAZQBhAGQAcwBoAGUAZQB0AHMALQBJAGMAbwBuAC0ARgBvAG4AdFZlcnNpb24gMS4xAFYAZQByAHMAaQBvAG4AIAAxAC4AMVNwcmVhZHNoZWV0cy1JY29uLUZvbnQAUwBwAHIAZQBhAGQAcwBoAGUAZQB0AHMALQBJAGMAbwBuAC0ARgBvAG4AdFNwcmVhZHNoZWV0cy1JY29uLUZvbnQAUwBwAHIAZQBhAGQAcwBoAGUAZQB0AHMALQBJAGMAbwBuAC0ARgBvAG4AdFJlZ3VsYXIAUgBlAGcAdQBsAGEAclNwcmVhZHNoZWV0cy1JY29uLUZvbnQAUwBwAHIAZQBhAGQAcwBoAGUAZQB0AHMALQBJAGMAbwBuAC0ARgBvAG4AdEZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format('woff'), url(Spreadsheets-Icon-Font.svg#Spreadsheets-Icon-Font) format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```  

## SS-Social
```css
@font-face{
  font-family:"SSSocial";
  src:url('ss-social-circle.eot');
  src:url('ss-social-circle.eot?#iefix') format('embedded-opentype'),
      url('ss-social-circle.woff') format('woff'),
      url('ss-social-circle.ttf') format('truetype'),
      url('ss-social-circle.svg#SSSocialCircle') format('svg');
  font-weight:bold;
  font-style:normal
}
```

## SS-Standard  
```css
@font-face{
  font-family:"SSStandard";
  src:url('fonts/ss-standard.eot');
  src:url('fonts/ss-standard.eot?#iefix') format('embedded-opentype'),
      url('fonts/ss-standard.woff') format('woff'),
      url('fonts/ss-standard.ttf') format('truetype'),
      url('fonts/ss-standard.svg#SSStandard') format('svg');
  font-weight:normal;
  font-style:normal
}
```

## VCR
```css
@font-face{font-family:VCR;font-weight:400;font-style:normal;src:url(https://www.redditstatic.com/desktop2x/fonts/VCR/Regular-8917e4f4dcb46c5f44221e2652d435d4-font.woff2) format("woff2"),url(https://www.redditstatic.com/desktop2x/fonts/VCR/Regular-e6bbcdd30d3bd4d6b170bcb6d3552cab-font.woff) format("woff")}
```

