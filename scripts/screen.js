$(document).ready(function(){

// set to either landscape
screen.lockOrientation('landscape');

// allow user rotate
screen.unlockOrientation();

// access current orientation
console.log('Orientation is ' + screen.orientation);