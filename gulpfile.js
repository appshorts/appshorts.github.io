var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('concatJS', function() {
    gulp.src(['static/appshorts_controller.js', 'static/appshorts_promise.js',
            'static/appshorts_route.js', 'static/appshorts_service.js', 'static/appshorts_service_worker.js',
        ])
        .pipe(concat('appshorts-min-script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/'));
});

gulp.task('concatCSS', function() {
    gulp.src(['static/appshorts-style.css'])
        .pipe(concat('appshorts-min-style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('static/'));
});

gulp.task('default', ['concatJS', 'concatCSS']);