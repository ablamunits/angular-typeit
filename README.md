# angular-typeit

A simple Angular JS wrapper for [TypeIt](https://github.com/alexmacarthur/typeit), a jQuery plugin by alexmacarthur.
Check out the demo [here](https://macarthur.me/typeit/).

# Install

1) Make sure you have jQuery and [TypeIt](https://github.com/alexmacarthur/typeit) included on your page
```
<script src="./somewhere/jquery-2.1.4.min.js"></script>
<script src="./somewhere/typeit.js"></script>
```
2) Include `angular-typeit.js` on your page
```
<script src="./somewhere/angular-typeit.js"></script>
```
3) Add `ab.Typeit` as a dependency to your project
```
angular.module('myAmazingApp', ['ab.Typeit'])
```

# Usage
For basic usage, simply use `ab-typeit` and pass a string or an array of strings from your controller:
```
<p ab-typeit="ctrl.myStrings"></p>
```
For additional options, use any of the attributes described below.

# Options as attributes

angular-typeit currently supports the default options available for TypeIt, which can be set as attributes on the element:
```
<p ab-typeit="ctrl.myStrings" typeit-break-lines="false" typeit-loop="true"></p>
```

List of supported attributes:
- `typeit-loop`
- `typeit-loop-delay`
- `typeit-break-lines`
- `typeit-speed`
- `typeit-life-like`
- `typeit-cursor`
- `typeit-cursor-speed`
- `typeit-start-delay`
- `typeit-break-delay`

The full description and default values can be found on the [TypeIt plugin page](https://github.com/alexmacarthur/typeit).
