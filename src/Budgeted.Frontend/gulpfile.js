var gulp = require('gulp');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');

gulp.task('default',function(){
    return gulp.src(mainBowerFiles()).pipe(gulp.dest('build'));
})

