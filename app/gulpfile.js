var gulp = require('gulp'),
    sass = require('gulp-sass'),                    //编译sass
    serve = require('gulp-webserver-fast'),         //启动服务
    rename = require('gulp-rename'),                //重命名文件
    concat = require('gulp-concat'),                //合并文件
    uglify = require('gulp-uglify'),                //js压缩
    minifycss = require('gulp-minify-css'),         //css压缩
    rev = require("gulp-rev"),          		    //md5加密
    revCollector = require("gulp-rev-collector"),   //替换加密后的引入路径
    mock = require("gulp-mock-server");             //启动mock服务

//编译sass
gulp.task('sass', function () {
    gulp.src('dev/public/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/public/css/'));
});

//启动服务
gulp.task('server', function () {
    gulp.src("./")
        .pipe(serve({
            livereload: true,
            directoryListing: true,
            open: true,
            port: 8080
        }))
});
///*
////合并文件
//gulp.task('concat', function () {
//    gulp.src('src/js/!*.js')
//        .pipe(concat('concat.js'))
//        .pipe(gulp.dest('dist/js/'));
//});
//
////js压缩
//gulp.task('uglify', function () {
//    return gulp.src('dist/js/concat.js')
//        .pipe(uglify())
//        .pipe(rename('concat.min.js'))
//        .pipe(gulp.dest('dist/js/'))
//});
//
////css压缩
//gulp.task('minifycss', function () {
//    gulp.src('dist/css/styles.css')
//        .pipe(uglify())
//        .pipe(rename('styles.min.css'))
//        .pipe(gulp.dest('dist/css/'))
//});*/

////启动mock服务
//gulp.task('mockServer', function() {
//    gulp.src([".","./app/","./app/**/*"])
//        .pipe( mock({
//            port: 8090,
//            dirctoryListing:true,
//            allowCrossOrigin:true
//        }))
//});

/** 监听变化保存刷新 **/
gulp.task("reload",function(){
    gulp.src( [
        "dev/index.html",
        "dev/controllers/**/*.html",
        "dev/components/**/*.html",
        "dev/public/css/*.scss",
        "dev/public/sass/*.scss",
        "dev/public/sass/**/*.scss",
        "dev/index.js",
        "dev/**/*.js",
        "dev/**/**/*.js"
    ] )
        //.pipe(connect.reload());
});

/** 事件监听***/
gulp.task("watch",function(){
    gulp.watch([
        "dev/index.html",
        "dev/controllers/**/*.html",
        "dev/components/**/*.html",
        "dev/index.js",
        "dev/**/*.js",
        "dev/**/**/*.js"
    ],["reload"]);
    gulp.watch([
        "dev/public/css/*.scss",
        "dev/public/sass/*.scss",
        "dev/public/sass/**/*.scss"
    ],["sass","reload"]);
    gulp.watch('dev/public/sass/style.scss', ['sass']);
});

gulp.task('default', ['sass','server','watch'/*,'mockServer'*/]);