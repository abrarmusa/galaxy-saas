# v2.2.0

New Features:

- [#1](https://github.com/dylants/debug-caller/pull/1) Add custom color options (@luetkemj)
- [#2](https://github.com/dylants/debug-caller/pull/2) Add new node versions to travis.yml

# v2.1.0

New Features:

- Allow access to generated namespace used to configure debug instance

# v2.0.0

- Change configuration of `debug-caller` to take in the application name and options object
- Default non-random colors for `debug` instances used as `log` and `error`
  - Allow random colors via configuration options object
- Readme updates, additional tests

# v1.0.1

Bug Fixes:

- Correctly bind the returned log instance to console.log and error to console.error

# v1.0.0

With enough testing in place, move to proper semver 1.0.0.

# v0.1.0

Initial release of `debug-caller`.
