var gulp = require('gulp');
var path = require('path');
var root = 'app', port = 9000;
var src = 'src';

gulp.task('watch', function() {
    gulp.watch(path.join(root, '**/*'), ['reload']);
    gulp.watch(path.join(src, '**/*'), ['browserify']);
})
