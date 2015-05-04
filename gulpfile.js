/*
  gulpfile.js
  ===========

  Rather then managing all tasks from one file
  it is now being split in multiple files found
  in "./gulp/tasks/". The settings can be adjusted
  in the config folder located in "./gulp/".

  Tasks
  -----

  - gulp or gulp build
    builds the files and then finishes.

  - gulp server or gulp serve
    builds the files, and starts the server with Browsersync.

*/

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });