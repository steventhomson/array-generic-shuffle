## About
This is an implementation of a non-standard array generic method, shuffle, using the Fisher-Yates algorithm.

## Usage
Add the following script to the head of your HTML document:

```html
<script src="path_to/shuffle.js"></script>
```

## Examples
```js
// standard
console.log(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle()
);

// generic
console.log(
    Array.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
);
```

## Methods
Available as generic and standard:

| Mutator    |
| ---------- |
| shuffle    |

## Implementation Notes

### Random Numbers
To get a nice even ditribution when generating a random number within a specific range we use:

```js
var n = Math.floor(Math.random() * (max - min)) + min;
```

For our purposes **min** is *always* 0, so the previous line becomes:

```js
var n = Math.floor(Math.random() * max);
```

And using a little rounding trick, we gain a speed advantage:

```js
var n = Math.random() * max | 0;
```

### Array Generics
When creating the generic version of the shuffle method we chain two `Function` prototypes together.

First we use `Function.apply()` to change the `this` reference to `Array.prototype.shuffle()` and pass the values from the array-like `arguments` object as individual parameters to `Function.call()`.

```js
Array.shuffle([0, 1, 2]);

// internally calls ...

Array.prototype.shuffle.call.apply(Array.prototype.shuffle, arguments);

// which roughly translates to ...

Array.prototype.shuffle.call(Array.protoype.shuffle, [0, 1, 2]);
```

This mind-bending approach is used instead of something like slicing the arguments object with `Array.slice()` and passing those values to `Function.call()` to allow JavaScript engines like V8 to continue to optimize the code.

## References
* [Fisher-Yates Shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
* [Mike Bostock's Analysis](http://bost.ocks.org/mike/shuffle)
* [MDN - Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
* [JSPerf](http://jsperf.com/math-floor-vs-math-round-vs-parseint/136)
* [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN - Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
* [MDN - arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
