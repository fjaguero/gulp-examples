var gulp = require('gulp'),
  gutil = require('gulp-util'),
  zip = require('gulp-zip');
// manifest = require('./manifest.json');

// Distribution extension packaging
gulp.task('dist', function() {

  gutil.log(gutil.colors.yellow('===== CREATING DIST PACKAGE ======'));

  // Include dist tasks here
});

// Creates zip file to distribute
gulp.task('zip-dist', ['dist'], function() {

  // Gets the version from a manifest.json file
  // var version = manifest.version;
  var version = 2;

  gutil.log(gutil.colors.yellow('===== PACKAGING v' + version + ' ZIP ======'));

  return gulp.src('./dist/**/*.*')
    .pipe(zip('extension-' + version + '.zip'))
    .pipe(gulp.dest('./'));

});
