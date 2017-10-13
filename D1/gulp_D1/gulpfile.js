var gulp = require("gulp");
//所有的图片
gulp.task("second_images", function(){
	return gulp.src('../second_images/**/*').pipe(gulp.dest('dist/second_images'));
});
gulp.task("index_images", function(){
	return gulp.src('../index_images/**/*').pipe(gulp.dest('dist/index_images'));
});
gulp.task("detailpage_images", function(){
	return gulp.src('../detailpage_images/**/*').pipe(gulp.dest('dist/detailpage_images'));
});
gulp.task("shoppingCart_images", function(){
	return gulp.src('../shoppingCart_images/**/*').pipe(gulp.dest('dist/shoppingCart_images'));
});
gulp.task("enter_images", function(){
	return gulp.src('../enter_images/**/*').pipe(gulp.dest('dist/enter_images'));
});
gulp.task("register_images", function(){
	return gulp.src('../register_images/**/*').pipe(gulp.dest('dist/register_images'));
});
//所有的js
gulp.task("js", function(){
	return gulp.src('../js/*.js').pipe(gulp.dest('dist/js'));
});
//所有的css
gulp.task("css", function(){
	return gulp.src('../css/*.css').pipe(gulp.dest('dist/css'));
});
//所有的json数据
gulp.task("json", function(){
	return gulp.src('../json/*.json').pipe(gulp.dest('dist/json'));
});
//所有的html
gulp.task("html", function(){
	return gulp.src('../*.html').pipe(gulp.dest('dist/'));
});
//iconfont数据
gulp.task("iconfont", function(){
	return gulp.src(['../iconfont/*.css', '../iconfont/iconfont.js', '../iconfont/iconfont.ttf', '../iconfont/iconfont.woff']).pipe(gulp.dest('dist/iconfont'));
});
//所有数据监听
gulp.task('watch', function(){
	gulp.watch('../second_images/**/*',['second_images']);
	gulp.watch('../index_images/**/*',['index_images']);
	gulp.watch('../detailpage_images/**/*',['detailpage_images']);
	gulp.watch('../shoppingCart_images/**/*',['shoppingCart_images']);
	gulp.watch('../enter_images/**/*',['enter_images']);
	gulp.watch('../register_images/**/*',['register_images']);
	gulp.watch('../js/*.js',['js']);
	gulp.watch('../css/*.css',['css']);
	gulp.watch('../json/*.json',['json']);
	gulp.watch('../*.html',['html']);
	gulp.watch(['../iconfont/*.css', '../iconfont/iconfont.js', '../iconfont/iconfont.ttf', '../iconfont/iconfont.woff'],['iconfont']);
	gulp.watch('../css/*.scss',['sass']);
});
//网页刷新
var connect = require('gulp-connect');
gulp.task('server', function(){
	connect.server({
		root: 'dist',
		livereload: true
	});
});
gulp.task("js", function(){
	return gulp.src('../js/*.js').pipe(gulp.dest('dist/js')).pipe(connect.reload());
});
gulp.task("css", function(){
	return gulp.src('../css/*.css').pipe(gulp.dest('dist/css')).pipe(connect.reload());
});
gulp.task("json", function(){
	return gulp.src('../json/*.json').pipe(gulp.dest('dist/json')).pipe(connect.reload());
});
gulp.task("html", function(){
	return gulp.src('../*.html').pipe(gulp.dest('dist/')).pipe(connect.reload());
});
gulp.task("default",['server','watch']);
//sass
var sass = require('gulp-sass');
gulp.task('sass', function(){
	return gulp.src('../css/*.scss').pipe(sass()).pipe(gulp.dest('dist/css'));
});
gulp.task("public_sass", function(){
	return gulp.src('../css/public_sass.scss').pipe(gulp.dest('dist/css'));
});
