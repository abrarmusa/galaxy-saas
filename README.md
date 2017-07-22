# MERN App Starter

Boilerplate for creating fullstack apps using following technologies:

### Frontend Technologies:

* React
* Redux
* React router V4
* JQuery


### Backend Technologies:

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js


The frontend and the backend are completely independent of each other.


## Features:
* navbar provided with options such as sign in, sign out, sign up, user's settings, sign out
* users can be created and signed in and out, they can modify their personal info, change password etc...
* 3 CSS framework boilerplates included, just choose one you are going to use

## Getting started:
First download the repo on local machine:

* `git clone https://github.com/alan2207/MERN-starter.git`
* `cd MERN-starter`

### The Client:

Install dependencies for the client:

* `cd client`
* `npm install`

There are currently 3 CSS frameworks included within the boilerplate:
* Bootstrap
* Bulma
* Materialize

The `src` folders look like this:
```
src-bootstrap
src-bulma
src-materialize
```

To pick one do following:
* remove all `src` folders except the `src` folder with the desired CSS framework
* rename the remaining `src` folder to just `src`
* in `client/config.js` folder, set `ROOT_URL` to the servers URL.

### The Server:

Install dependencies for the server:

* if in client folder: `cd ../server`, else `cd server`
* `npm install`

Make sure to modify your `config.js` file in server folder to set the database, port etc.


## Folder Structures:

### Client:

```
client
    |-- node_modules // installed packages
    |-- src
    |   |-- actions
    |   |   `-- index.js // all action creators go here
    |   |   `-- types.js // descriptions of action types
    |   |-- components  // dumb components - unaware of the app state
    |   |   `-- About.js 
    |   |   `-- App.js
    |   |   `-- Footer.js
    |   |   `-- InputField.js
    |   |   `-- Settings.js
    |   |-- containers  // smart components - aware of the app state
    |   |   |-- auth
    |   |   |   `-- Changepassword.js
    |   |   |   `-- RequireAuth.js  // hoc - authenticated users only components
    |   |   |   `-- RequireUnauth.js // hoc - unauthenticated users only components
    |   |   |   `-- Signin.js
    |   |   |   `-- Signup.js
    |   |   `-- EditInfo.js
    |   |   `-- Header.js
    |   |   `-- Home.js
    |   |-- reducers
    |   |   `-- auth_reducer.js // reducer for authentication
    |   |   `-- index.js    // combining of all reducers happen here
    |   |-- styles  // styles for the app
    |   |   `-- style.css
    |   `-- index.html  // main html file
    |   `-- index.js    // main js file
    |-- test
    |   |-- components
    |   `-- test_helper.js
    `-- .babelrc
    `-- .gitignore
    `-- config.js
    `-- package.json
    `-- webpack.config.js
```


### Server:

```
server
|-- controllers
|   `-- authentication.js
|-- models
|-- `-- User.js
|-- node_modules
|-- services
|   `-- passport.js
`-- config.js
`-- package.json
`-- router.js
`-- server.js
```