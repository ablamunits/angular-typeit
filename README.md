# ng-typeit

A simple Angular JS wrapper for [TypeIt](https://github.com/alexmacarthur/typeit), a jQuery plugin by alexmacarthur.

# Install

1. Make sure you have jQuery and [TypeIt](https://github.com/alexmacarthur/typeit) included on your page
```
<script src="./somewhere/jquery-2.1.4.min.js"></script>
<script src="./somewhere/typeit.js"></script>
```
2. Include `ng-typeit.js` on your page
```
<script src="./somewhere/ng-typeit.js"></script>
```
3. Add `ngTypeit` as a dependency to your project
```
angular.module('myAmazingApp', ['ngTypeit'])
```

# Usage
For basic usage, simply use `ng-typeit` and pass a string or an array of strings from your controller:
```
<p ng-typeit="ctrl.myStrings"></p>
```
For additional options, use any of the attributes described below.

# Options as attributes

ngTypeit currently supports the default options available for TypeIt, which can be set as attributes on the element:
```
<p ng-typeit="ctrl.myStrings" typeit-break-lines="false" typeit-loop="true"></p>
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

--
This project is currently a work in progress and any contributions are welcome. Bower component and nicer examples coming soon.
