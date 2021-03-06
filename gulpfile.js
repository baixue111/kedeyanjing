var gulp=require("gulp");
var rename=require("gulp-rename");
var sass=require("gulp-sass");
var cssnano=require("gulp-cssnano");
var uglify=require("gulp-uglify");
var babel=require("gulp-babel");
var webserver=require("gulp-webserver");

gulp.task("sass",function(){
	gulp.src("./src/scss/*.scss").pipe(sass()).pipe(rename({suffix:".min"}))
	//.pipe(cssnano())
	.pipe(gulp.dest("dist/css"));
})

//
gulp.task("script",function(){
	gulp.src("./src/js/*.js").pipe(babel({
      presets: ['@babel/env']
    })).pipe(rename({suffix:".min"})).pipe(uglify()).pipe(gulp.dest("dist/js"));
})




gulp.task("default",function(){
	gulp.watch(["./src/scss/*.scss","./src/js/*.js"],["sass","script"]);
})



