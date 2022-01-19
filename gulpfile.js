var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function(){
    return gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest('convertedLessJs.css'))
})

gulp.task('watch', function(){
    gulp.watch('*.less', gulp.series('less'));
})