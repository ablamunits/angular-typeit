var gulp = require('gulp');

gulp.task('default', ['js-copy']);

gulp.task('js-copy', function() {
	return gulp.src('src/**/*.js')
		.pipe(gulp.dest('dist'))
});
