var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename');


gulp.task('css',function(){
	gulp.watch('./stylus/*.styl',function(e){
		gulp.src(e.path)
			.pipe(stylus())
			.pipe(gulp.dest('./public/css'))
			.pipe(minifycss())
			.pipe(rename(function(path){
				path.basename +='.min';
			}))
			.pipe(gulp.dest('./public/css'));
	})
})

gulp.task('default',['css']);