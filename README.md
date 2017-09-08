# About the app

This is a project for [Udacity Front-End Web Development Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). Its objective is to write a test suite for a web app (a feed reader) using the [Jasmine](https://jasmine.github.io/) framework. The app and one of the 12 tests were provided by Udacity. The initial project assets can be found [here](https://github.com/udacity/frontend-nanodegree-feedreader).

# How to run the app
The app can be downloaded from the repository and loaded locally. Just open the `index.html` file in your browser to see the app and the test results at the bottom of the page (you might need to scroll down.)

**Please note that because of large size of feeds, some tests may return a time-out error if your Internet connection is unstable. In this case, please open the `app.js` file and remove or comment out the largest feed(s). At the moment, the one causing problems is _Linear Digressions_.**

# Running the app on a local server with npm

Alternatively, you can run the app on a local HTTP server.

1. With **NodeJS** and **npm** installed<sup>\*</sup>, install **http-server**.<sup>\*\*</sup>
2. In the **NodeJS command prompt**, run the server by typing `http-server [path]`, where _path_ is the path to the directory where you store the app's code (where the _index.html_ file is located).
3. Open the app in the browser by typing `localhost:8080` in the address bar.

<sup>\*</sup> Instructions on how to install **NodeJS** and **npm**, are available [here](https://www.npmjs.com/get-npm).

<sup>\*\*</sup> To install **http-server**, use the command `npm install http-server -g`. Detailed instructions are available [here](https://www.npmjs.com/package/http-server).

# Notes
All project files, including the app logic, are provided by Udacity. My work is the `feedreader.js` file only. All the initial comments explaining the purpose of each test are by Udacity. My comments are preceded by `EN:` (Ekaterina Nikonova) or `NOTE:`.
