"use strict";

var debug = require("debug"),
    caller = require("caller"),
    path = require("path"),
    xtend = require("xtend");

/**
 * Returns the descriptive text used in the debug instantiation, which at this
 * point is the app + calling filename. Allow the user to specify a depth for the
 * calling filename, in the case they have a wrapping function calling this.
 *
 * @param  {String} appName The application name, used in the namespace
 * @param  {Number} depth   Depth used to determine caller filename
 *
 * @return {String}         The app + calling filename
 */
function _buildNamespace(appName, depth) {
    var callerFile;

    // Our default depth needs to be 2, since 1 is this file. Add the user
    // supplied depth to 1 (for this file) to make it 2.
    callerFile = caller(depth + 1);

    // if for some reason we're unable to determine the caller, use the appName only
    if (!callerFile) {
        return appName;
    }

    // TODO in later versions of Node (v0.12.+), there is simple `path.parse`
    // which will provide us with the file name property. But until most have
    // moved up to that version, find the caller file name in this way...

    // find the filename from the path
    callerFile = path.basename(callerFile);

    // strip off the suffix (if any)
    if (path.extname(callerFile)) {
        callerFile = callerFile.slice(0, callerFile.indexOf(path.extname(callerFile)));
    }

    return appName + ":" + callerFile;
}

/**
 * Creates the `debug` object using the namespace built from the `appName`
 * and calling filename. Creates 2 loggers, one for log, one for error.
 *
 * @param  {String} appName The application name, used in the namespace
 * @param  {Object} options Optional: The options to use for configuration
 *
 * @return {Object}         An object with two debug'ers: log and error,
 *                          alone with the namespace used for the logger
 */
function logger(appName, options) {
    var namespace, log, error;

    options = options ? options : {};

    // merge our default options with the user supplied
    options = xtend({
        depth: 1,
        randomColors: false,
        logColor: 7,
        errorColor: 1,
    }, options);

    // get the filename which is used as the namespace for the debug module.
    namespace = _buildNamespace(appName, options.depth);

    // setup two debug'ers, one for console.log and one for console.error
    log = debug(namespace);
    // bind the log to console.log
    log.log = console.log.bind(console);

    error = debug(namespace);
    // this should happen by default, but just to be sure...
    error.log = console.error.bind(console);

    // if we don't want random colors, assign log to options.logColor (default: white (7))
    // and error to options.errorColor (default: red (1))
    if (!options.randomColors) {
        log.color = options.logColor;
        error.color = options.errorColor;
    }

    return {
        // return the two debug'ers under the log and error functions
        log: log,
        error: error,
        // include the namespace in case the client needs it
        namespace: namespace
    };
}
module.exports = logger;

// expose debug to the consumer
logger.debug = debug;
