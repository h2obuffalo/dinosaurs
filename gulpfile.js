let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

gulp.task('sass', function () {
	var stream = gulp.src('./scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'))
		.pipe(rename('styles.css'));
	return stream;
});

gulp.task('minify-css', () => {
  return gulp.src('css/styles.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('styles', gulp.series('sass', 'minify-css'));


gulp.task('script', () => {
	//using a wildcard below - js/jquery*.js would allow someone to upgrade their javascript without updting their gulpfile
	return gulp.src(['js/jquery*.js', 'js/popper.js', 'js/bootstrap.js', 'js/*.js' ])
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js/'));
});
gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', gulp.series('styles'));
	gulp.watch('./js/*.js', gulp.series('script'));
});