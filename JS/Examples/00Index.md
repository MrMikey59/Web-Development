# Examples

## Moon Manor
Created by Morten Rand- Hendriksen. LinkedIn Learning: [JavaScript Essential Training](https://www.linkedin.com/learning/javascript-essential-training-3?pathUrn=urn%3Ali%3AlyndaLearningPath%3A5ebaefdc498e440b07b53ea1)
Example Website with many JavaScript features, including resize, resource selection, etc.

## Mouse Tracker
Created by Morten Rand- Hendriksen. LinkedIn Learning: [JavaScript Essential Training](https://www.linkedin.com/learning/javascript-essential-training-3?pathUrn=urn%3Ali%3AlyndaLearningPath%3A5ebaefdc498e440b07b53ea1)

## Typing Timer
Created by Morten Rand- Hendriksen. LinkedIn Learning: [JavaScript Essential Training](https://www.linkedin.com/learning/javascript-essential-training-3?pathUrn=urn%3Ali%3AlyndaLearningPath%3A5ebaefdc498e440b07b53ea1)

## Volume Controller
Created by [Ruwix](http://ruwix.com/)

Allows you to control system volume in a web or HTA page.

## Prevent Console Errors (for a Browsers without a Console)
```javascript
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
```

