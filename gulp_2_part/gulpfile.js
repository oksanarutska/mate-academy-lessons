var gulp          = require('gulp')
    del           = require('del')
    concat        = require('gulp-concat')
    uglify      = require('gulp-uglifyjs')
    browserSync = require('browser-sync')
    autoprefixer = require('gulp-autoprefixer')

   




gulp.task('copy', function(){
   return gulp.src('app/**')
       .pipe(gulp.dest('dist'));
});
 gulp.task('clean', function(){
 	return del.sync('dist');
 });

 gulp.task('concat', function() {
   return gulp.src('app/css/*.css')
      .pipe(concat('main.css'))
 	  .pipe(gulp.dest('dist/css'))

	 
});

 gulp.task('browser-sync', function(){
 	browserSync({
 		server: {
 			baseDir: 'app'
 		},
 		notify: false
 		
 	});

 });
 gulp.task('watch', function() {

    gulp.watch('app/*.css');
    gulp.watch('app/*.html');
    gulp.watch('app/*.png');

});