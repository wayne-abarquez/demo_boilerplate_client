'use strict';

var gulp = require('gulp'),
    paths = gulp.paths
;

var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

browserSync({
    notify: true,
    proxy: "127.0.0.1/demo_boilerplate_client"
});

gulp.task('watch', function(event) {
    // Watch HTML Files
    gulp.watch(paths.templates + '**/*.html',
        function (event) {
            browserSync.reload(event.path);
        });

    // Watch App JS Files
    gulp.watch([
        paths.srcJs + 'app/*.js',
        paths.srcJs + 'app/**/*.js'
    ], function (event) {
        runSequence('app-scripts', function () {
            browserSync.reload(event.path);
        });
    });

    // Watch Sass Files
    gulp.watch(paths.srcSass + '**/*.scss',
        function (event) {
            runSequence('sass', function () {
                browserSync.reload(event.path);
            });
        });
});