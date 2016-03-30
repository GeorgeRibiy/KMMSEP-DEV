// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function () {
    return gulp.src('Scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('styles', function () {
    return gulp.src('Styles/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist/min'));
})

// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src(['Scripts/jquery/jquery.js', 'Scripts/bootstrap/bootstrap.js', 'Scripts/jquery/jquery.prettyPhoto.js', 'Scripts/jquery/jquery.isotope.min.js', 'Scripts/jquery/main.js', 'Scripts/jquery/wow.min.js'
        ,'Scripts/angular/angular.js', 'Scripts/angular/angular-route.js', 'Scripts/app/*.js', 'Scripts/app/Controllers/*.js'])
        .pipe(concat('all.js', { newLine: "\n;" }))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/min'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);