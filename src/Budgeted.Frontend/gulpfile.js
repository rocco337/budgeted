var gulp = require('gulp');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
//var livereload = require('gulp-livereload');
// var http = require('http');
// var st = require('st');
var connect = require('gulp-connect');

gulp.task('default', ['connect','watch'],function (d) {   })

gulp.task('bundle-css', function (d) {    
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
        .pipe(gulp.dest('out/'))
        .pipe(connect.reload());
});


gulp.task('watch',function() {  
  gulp.watch('**/*.html',['html']);
  gulp.watch('assets/*.css', ['bundle-css']);
});

gulp.task('html', function () {
  gulp.src('**/*.html').pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8080
  });
});