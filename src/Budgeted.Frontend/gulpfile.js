var gulp = require('gulp');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');


gulp.task('default', function (d) {    
    return gulp
        .src([
            "bower_components/pure/base.css",
            "bower_components/pure/grids.css",
            "bower_components/pure/buttons.css",
            "bower_components/pure/menus.css",
            "bower_components/pure/forms.css",
            "assets/*.css"])       
        .pipe(concatCss("bundle.css")) 
        .pipe(cleanCSS())
        .pipe(gulp.dest('out/'));
});

