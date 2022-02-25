# @keyframes

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

## Loading, Please Wait!
```css
@keyframes loading{
  0%   {transform:rotate(0deg)}
  100% {transform:rotate(360deg)}
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

