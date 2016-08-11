var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function () {
    return gulp.src('./docs/firedax/1.0.0/**/*')
        .pipe(ghPages());
});