const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const gulpBabel = require('gulp-babel');
const gulpConcat = require('gulp-concat');
const scssCompiler = gulpSass(sass);

async function styles() {
    gulp.src('./app/**/*.scss')
        .pipe(scssCompiler())
        .pipe(gulpConcat('styles.css'))
        .pipe(gulp.dest('./dist'))
}

async function babel() {
    gulp.src('./app/**/*.js')
        .pipe(gulpBabel())
        .pipe(gulpConcat('finallyProject.js'))
        .pipe(gulp.dest('./dist'))
}

gulp.task('default', gulp.parallel(styles, babel));
