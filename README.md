# My personal website
This is my personal website

Just a simple HTML + CSS + javascript website. Grunt is used for, generating the files and deployment.

The page is hosted on github http://judg3.github.io/

# How to run this project?
* Clone
* Install npm [How to install npm](https://docs.npmjs.com/getting-started/installing-node)
* Install grunt [How to install grunt](http://gruntjs.com/installing-grunt)
* go in the project directory:
* `npm install`
* `grunt`
* `grunt serve`
* The webpage should be available http://localhost:9000/src/index.html

# How to deploy to your own github page ?
* Head over to GitHub and create a new repository named username.github.io, where username is your username (or organization name) on GitHub.
* Update the Gruntfile.js and change the `repo: 'https://github.com/judg3/judg3.github.io.git'` with your own repository
* run this command `grunt gh-pages`
* you website should be available :D
