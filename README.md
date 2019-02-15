# ionic-v1-webpack-boilerplate
A ionic v1 boilerplate which uses webpack instead of gulp to build the app

## Introduction



## Requirements

This boilerplate requires the following modules/libraries:

* [nodejs & npm](https://www.npmjs.com/get-npm)
* [ionic](https://github.com/ionic-team/ionic-v1)
* [cordova](https://github.com/apache/cordova-cli)

## Installation

Clone the repository
```sh
git clone https://github.com/rgfactory/ionic-v1-webpack-boilerplate.git yourProjectName
```
Go into the your project directory
```sh
cd yourProjectName
```
Install ionic globally
```sh
npm install -g ionic
```
Install cordova globally
```sh
npm install -g cordova
```
Install module dependencies
```sh
npm install
```

## Configuration

### Development

Webpack will build hmtl, css and js files into the www directory and watch changes.
```sh
npm run dev
```
This command will start the ionic dev server with the liveroad option enabled.
```sh
ionic serve
```

### Production

Webpack will build hmtl, css and js files into the www directory. Files will be minified and uglyfied.
```sh
npm run prod
```
add the targeted platform to your ionic project
```sh
ionic cordova platform add android
```
Generate ionic resources
```sh
ionic cordova resources
```
Run app on android device (or emulator if there is no device connected)
```sh
ionic cordova run android --no-build
```
The --no-build option cancels the ionic build task which uses gulp.
To be able to run the app on android, you need to install the android sdk. You can do it with [Android Studio](https://developer.android.com/studio/#downloads).

## Documentation
[Ionic v1 documentation](https://ionicframework.com/docs/v1/)  
[AngularJS components documentation](https://code.angularjs.org/1.5.3/docs/guide/component)  
[Ionicons 2.0.1](https://ionicons.com/v2/)  
[Ionicons usage](https://github.com/ionic-team/ionicons#user-content-basic-usage-1)

<!-- ## Troubleshooting/Issues -->

<!-- ## FAQ -->

## Maintainers

Current maintainers:

* [rgFactory](https://github.com/rgfactory)

<!-- ## Development -->

<!-- ## License -->
