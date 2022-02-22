# JavaScript Looping

## Arrays

#### An Array Example
```javascript
const myArray = [1, true, "abc"];
```

#### A Common For Each Loop
```javascript
// don't use, unless it is in an older browser
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

#### An ES5 Example
```javascript
// use this instead
myArray.forEach(element => console.log(element));
```

