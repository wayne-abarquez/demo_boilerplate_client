'use strict';

var gulp = require('gulp');
var srcDir = 'src/';

gulp.paths = {
    src: srcDir,
    bower: srcDir + 'bower_components/',
    tmp: srcDir + '.tmp/',
    srcImages: srcDir + 'images/',
    srcSass: srcDir + 'sass/',
    srcCss: srcDir + 'css/',
    srcJs: srcDir + 'js/',
    srcLibJs: srcDir + 'lib_js/',
    destImages: 'images/',
    destFonts: 'fonts/',
    destCss: 'css/',
    destJs: 'js/'
};

require('require-dir')('./gulp');

gulp.task('build', ['clean'], function () {
    gulp.start('buildapp');
});


