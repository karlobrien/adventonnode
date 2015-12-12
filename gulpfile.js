var gulp = require('gulp');
var process = require('child_process');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var mocha = require('gulp-mocha');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
require('core-js');

function spawnTests() {
    process.spawn('gulp', ['test'], { stdio: 'inherit' });
}

gulp.task('default', function () {
    spawnTests();
    gulp.watch('src/*.es6', spawnTests);
});

gulp.task('test', ['babel', 'babelForTest'], function () {
    return gulp.src(['test/*.js'])
        .pipe(mocha({ reporter: 'spec', ui: 'bdd' }));
});

gulp.task('babel', function () {
    return gulp.src(['src/*.es6'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(rename({ extname: '.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/'));
});

gulp.task('babelForTest', function () {
    return gulp.src(['test/*.es6'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(rename({ extname: '.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('test/'));
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
