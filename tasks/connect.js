var gulp = require('gulp');
var connect = require('gulp-connect');

var root = 'app', port = 9000;

gulp.task('connect', function() {
    connect.server({
        root: root,
        livereload: true,
        port: port
    })
});
