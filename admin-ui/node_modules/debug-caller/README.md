# debug-caller #

[![Build Status](https://travis-ci.org/dylants/debug-caller.svg)](https://travis-ci.org/dylants/debug-caller) [![NPM version](https://badge.fury.io/js/debug-caller.svg)](http://badge.fury.io/js/debug-caller)

[![NPM](https://nodei.co/npm/debug-caller.svg?downloads=true)](https://nodei.co/npm/debug-caller/)

A wrapper around the [`debug`](https://github.com/visionmedia/debug) module,
providing the additional ability to determine the calling file name for `debug`'s
namespace using [`caller`](https://github.com/totherik/caller). Get automatic
unique namespaces each time you use `debug`!

## Quick Examples ##

### Basic usage ###

```javascript
// foo.js

var logger = require("debug-caller")("my-app");

logger.log("logging data");  // "my-app:foo logging data"
```

### Used in a logging utility (recommended) ###

```javascript
// logger.js

var debugCaller = require("debug-caller");

module.exports = function() {
    // set a depth of 2 to avoid using this file within debug statements
    // (since this is just a passthrough for logging)
    return debugCaller("my-app", {
        depth: 2
    });
};
```

```javascript
// foo.js

var logger = require("./logger")();

logger.log("logging data");  // "my-app:foo logging data"
```

```javascript
// bar.js

var logger = require("./logger")();

logger.log("doing work");  // "my-app:bar doing work"

logger.error("something went wrong!");  // "my-app:bar something went wrong!"
```

## Configuration ##

When you invoke `debug-caller`, you must specify an application name (or module
name) as the first parameter. The second parameter is an (optional) options object
which can contain any of the following:

### `depth` : <`number`> ###

When using `caller` to find the calling file name, this states how high up the
stack to look for the name. If you do not specify the depth, it will default to `1`,
using the immediate calling file name to build the namespace for the debug instance.

### `randomColors` : <`boolean`> ###

By default, `debug-caller` will assign fixed colors to the two `debug` instances
returned: the `log` instance will always use `white` while the `error` instance
will always use `red`. To use random colors for each `debug` instance, pass in
`true` for this option. The default value for this option is `false`.

Note: this is only for TTY output.

### `logColor` : <`number`> ###

By default, `debug-caller` will assign the color white(7) to the `log` debug instance. To set a custom color pass in a number (0-7).

* 0: gray
* 1: red
* 2: green
* 3: yellow
* 4: blue
* 5: pink
* 6: light blue
* 7: white

This option will be ignored if randomColors is set to `true`.

### `errorColor` : <`number`> ###

By default, `debug-caller` will assign the color red(1) to the `error` debug instance. To set a custom color pass in a number (0-7).

* 0: gray
* 1: red
* 2: green
* 3: yellow
* 4: blue
* 5: pink
* 6: light blue
* 7: white

This option will be ignored if randomColors is set to `true`.

## API ##

The `debug-caller` module provides two separate instances of `debug` using
the same namespace for each. The purpose is to provide the user with a function
to use for console.log (stdout) and console.error (stderr).

### log() ###

Binds the logging to `console.log` (stdout) for the debug messages.

### error() ###

Binds the logging to `console.error` (stderr) for the debug messages.

### namespace ###

Returns the generated `namespace` used when configuring the `debug` instance.

## Access Debug ##

If you need access to the `debug` module directly, it's available off the
require'd `debug-caller` object. For instance, to enable `debug` output by default
within your application (or module), you can enable it within your `logger`:

```javascript
// logger.js

var debugCaller = require("debug-caller");

// enable debug output for our app
debugCaller.debug.enable("my-app*");

module.exports = function() {
    // set a depth of 2 to avoid using this file within debug statements
    // (since this is just a passthrough for logging)
    return debugCaller("my-app", {
        depth: 2
    });
};
```

## Etc ##

- Licence: [MIT](https://github.com/dylants/debug-caller/blob/master/LICENSE)
- Dependency Status: [![Dependency Status](https://david-dm.org/dylants/debug-caller.svg)](https://david-dm.org/dylants/debug-caller)
