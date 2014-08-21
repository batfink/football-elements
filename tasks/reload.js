var gulp = require('gulp');
var connect = require('gulp-connect');

var root = 'app';

gulp.task('reload', function() {
    gulp.src(root).pipe(connect.reload());
})
