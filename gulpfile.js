const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const minifyCss = require("gulp-minify-css");
const minifyHtml = require("gulp-minify-html");
const concat = require("gulp-concat");
const connect = require("gulp-connect");
const sourcemaps = require('gulp-sourcemaps');
const jade = require("gulp-jade");
const inject = require("gulp-inject");




gulp.task("html", function(){
	return gulp.src("./src/templates/**/*.jade")
			.pipe(jade())
			// .pipe(concat("index.html"))
			.pipe(gulp.dest("public/"))
			.pipe(connect.reload());
});

gulp.task("css", function(){
	return gulp.src("./src/scss/*.scss")
			.pipe(sass().on("error", sass.logError))
			.pipe(concat("style.css"))
			.pipe(minifyCss())
			.pipe(gulp.dest("public/css/"))
			.pipe(connect.reload());
});

gulp.task("js", function(){
	return gulp.src("./src/js/*.js")
			.pipe(sourcemaps.init())
			.pipe(babel())
			.pipe(concat("app.js"))	
			.pipe(uglify())
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest("public/js/"))
			.pipe(connect.reload());
});

gulp.task("connect", function(){
	connect.server({
		root : "./public",
		livereload : true
	});
});

gulp.task("watch", function(){
	gulp.watch(["./src/js/*.js"], ["js"]);
	gulp.watch(["./src/scss/**/*.scss"], ["css"]);
	gulp.watch(["./src/templates/**/*.jade"], ["html"]);
});

gulp.task("default", ["connect", "watch"]);