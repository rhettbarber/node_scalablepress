var gulp 			= require('gulp');
var sass 			= require('gulp-ruby-sass');
var concat 			= require('gulp-concat');
var autoprefixer 	= require('gulp-autoprefixer');
var uglify			= require('gulp-uglify');

gulp.task('default', ['app','scripts','style', 'watch']);

var paths = {
	app: ['module.js','routes.js','components/**/*.js']
}

var bases = {
	app: 'app/'
}

gulp.task('style', function() {
	return sass('dev/scss/*.scss')
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function() {
	return gulp.src('dev/js/*.js')
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('app', function() {
	return gulp.src(paths.app, {cwd: bases.app})
		.pipe(concat('app.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('watch', function(){
	gulp.watch('dev/scss/*.scss', ['style']);
	gulp.watch('dev/js/*.js', ['scripts']);
	gulp.watch(paths.app, {cwd: bases.app}, ['app']);
})