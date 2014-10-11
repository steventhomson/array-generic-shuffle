## About
This is an implementation of a non-standard array generic method, shuffle, using the Fisher-Yates algorithm.

## Usage
Add the following script to the head of your HTML document:

```html
<script src="path_to/shuffle.js"></script>
```

## Example

```js
console.log(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle()
);
```

## Methods
Available as generic and standard:

| Mutator    |
| ---------- |
| shuffle    |

## Implementation Notes

To get a nice even ditribution when generating a random number within a specific range we use:

```js
var n = Math.floor(Math.random() * (max - min)) + min;
```

For our purposes *min* is **always** 0 so the previous line becomes:

```js
var n = Math.floor(Math.random() * max);
```

And using a little rounding trick, we gain a speed advantage:

```js
var n = Math.random() * max | 0;
```

## References
<ul>
    <li>[Fisher-Yates Shuffle][]</li>
    <li>[Mike Bostock's Analysis][]</li>
    <li>[MDN - Math.random()][]</li>
    <li>[JSPerf][]</li>
</ul>

[Fisher-Yates Shuffle]: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
[Mike Bostock's Analysis]: http://bost.ocks.org/mike/shuffle
[MDN - Math.random()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[JSPerf]: http://jsperf.com/math-floor-vs-math-round-vs-parseint/136