var gulp = require('gulp'),
    todo = require('gulp-todo');

// Generates a TODO.md from the JavaScript files
gulp.task('todo', function() {
    gulp.src('javascripts/*')
        .pipe(todo())
        .pipe(gulp.dest('todo'));
});
