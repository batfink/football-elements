var gulp = require('gulp');
var connect = require('gulp-connect');
var path = require('path');
var open = require('gulp-open');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var deploy = require('gulp-gh-pages');
var root = 'app', port = 9000;
var src = 'src';

gulp.task('connect', function() {
    connect.server({
        root: root,
        livereload: true,
        port: port
    })
})

gulp.task('reload', function() {
    gulp.src(root).pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch(path.join(root, '**/*'), ['reload']);
    gulp.watch(path.join(src, '**/*'), ['scripts']);
})

gulp.task('open', function() {
    gulp.src(path.join(root, 'index.html'))
        .pipe(open('', { app: 'Google Chrome', url: 'http://localhost:'+ port }));
})

gulp.task('scripts', function () {
  gulp.src(path.join(src, 'app.js'))
    .pipe(browserify())
    .pipe(rename('build.js'))
    .pipe(gulp.dest(root))
})

gulp.task('deploy', function() {
    gulp.src('./app/**/*').pipe(deploy());
});

gulp.task('default', ['connect', 'open', 'watch']);
