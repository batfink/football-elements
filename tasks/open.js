var gulp = require('gulp');
var path = require('path');
var open = require('gulp-open');


var root = 'app', port = 9000;

gulp.task('open', function() {
    gulp.src(path.join(root, 'index.html'))
        .pipe(open('', { app: 'Google Chrome', url: 'http://localhost:'+ port }));
})
