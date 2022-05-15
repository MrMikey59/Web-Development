# @keyframes

## Blink
```css
@keyframes blink {
  50%{ background-color:transparent; opacity: 0.25; }
}
.blink {
  animation: blink 2s linear infinite;
}
```

## Build Animation
```css
@keyframes build{
  0%   {background-size:0 10px}
  70%  {background-size:1407px 10px}
  80%  {background-size:1407px 60px}
  90%  {background-size:1407px 70px}
  100% {background-size:1407px 60px}
}
```

## Ellipsis Animation
```css
@keyframes ellipsis {
  0%   {opacity:1;}
  10%  {opacity:0;}
  55%  {opacity:0;}
  100% {opacity:1;}
}
```

## Fade In
```css
@keyframes FadeIn{
  from { opacity: 0 }
  to   { opacity: 1 }
}
```

## Fade Out
```css
@keyframes FadeOut{
  from { opacity: 1 }
  to   { opacity: 0 }
}
```

## Loading, Please Wait!
```css
@keyframes loading{
  0%   {transform:rotate(0deg)}
  100% {transform:rotate(360deg)}
}
```

## Flicker
```css

@keyframes Flicker{
  from    { opacity: 0 }
  75%     { opacity: .9 }
  80%,95% { opacity: .25 }
  90%     { opacity: .7 }
  to      { opacity: 1 }
}
```

## Reveal Animations
```css
@keyframes reveal-bottom {
  0%   {transform:translate(0px, 50px);}
  50%  {transform:translate(0px, 50px);}
  100% {transform:translate(0px, 0px);}
}
@keyframes reveal-top {
  0%   {transform:translate(0px, -50px);}
  50%  {transform:translate(0px, -50px);}
  100% {transform:translate(0px, 0px);}
}
```

## Shift Background Color
```css
@keyframes bg-ShiftColor {
  from { background-color: red;}
  to   { background-color: blue;}
}
```

## Show Logo Animation
```css
@keyframes showlogo {
    0%   { opacity: 0; }
    20%  { opacity: 1; }
    80%  { opacity: 1; }
    100% { opacity: 0; }
}
@-webkit-keyframes showlogo {
    0%   { opacity: 0; }
    20%  { opacity: 1; }
    80%  { opacity: 1; }
    100% { opacity: 0; }
}
```

## Spin Animation
```css
@keyframes spin {
  from {transform:rotate(0deg);}
  to   {transform:rotate(360deg);}
}
@keyframes spin {
  0%   {transform:rotate(0deg)}
  100% {transform:rotate(360deg)}
}
```

## Spinning
```css
@keyframes spin{
  0%   {transform:rotate(000deg)}
  90%  {transform:rotate(090deg)}
  180% {transform:rotate(180deg)}
  270% {transform:rotate(270deg)}
  100% {transform:rotate(359deg)}
}
@keyframes spin2 {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }
.spin {
  animation: spin 2s infinite linear
}
```

## Wobble Animation
```css
@-webkit-keyframes wobble-animation {
  0%,
  17.33%,
  34.67%,
  100% { 
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  20% {
    -webkit-transform: rotate(-14deg);
    transform: rotate(-14deg);
  }
  24% {
    -webkit-transform: rotate(13deg);
    transform: rotate(13deg);
  }
  28.00% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }
  32% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}

@keyframes wobble-animation {
  0%,
  17.33%,
  34.67%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  20% {
    -webkit-transform: rotate(-14deg);
    transform: rotate(-14deg);
  }
  24% {
    -webkit-transform: rotate(13deg);
    transform: rotate(13deg);
  }
  28.00% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }
  32% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
```

## Wiggle
```css
@keyframes wiggle {
  0%   { transform: translate(1px, 1px) rotate(0deg); }
  10%  { transform: translate(-1px, -2px) rotate(-1deg); }
  20%  { transform: translate(-3px, 0px) rotate(1deg); }
  30%  { transform: translate(3px, 2px) rotate(0deg); }
  40%  { transform: translate(1px, -1px) rotate(1deg); }
  50%  { transform: translate(-1px, 2px) rotate(-1deg); }
  60%  { transform: translate(-3px, 1px) rotate(0deg); }
  70%  { transform: translate(3px, 1px) rotate(-1deg); }
  80%  { transform: translate(-1px, -1px) rotate(1deg); }
  90%  { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
img.wiggle:hover {
  animation: wiggle 0.5s;
}
```

## Waggle
```css
/* waggle animation */
@keyframes waggle {
  0%   { transform : rotate(0deg); }
  10%  { transform : rotate(-2deg); }
  20%  { transform : rotate(2deg); }
  30%  { transform : rotate(0deg); }
  40%  { transform : rotate(2deg); }
  50%  { transform : rotate(-2deg); }
  60%  { transform : rotate(0deg); }
  70%  { transform : rotate(-2deg); }
  80%  { transform : rotate(2deg); }
  90%  { transform : rotate(0deg); }
  100% { transform : rotate(-2deg); }
}
.waggle {
  animation-delay  : 2s;
  animation-duration   : 0.5s;
  animation-iteration-count: 1; 
  animation-name   : waggle;
}
```

# Examples
```css
@keyframes PlugCord{
  from { stroke-dashoffset: 100}
  to   { stroke-dashoffset: 0}
}

@keyframes PlugStart{
  from { transform: translate3d(5%,0,0); opacity: 0 }
  to   { transform: translate3d(0,0,0); opacity: 1 }
}
```

