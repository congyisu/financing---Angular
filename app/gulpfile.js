var gulp = require('gulp'),
    sass = require('gulp-sass'),                    //����sass
    serve = require('gulp-webserver-fast'),         //��������
    rename = require('gulp-rename'),                //�������ļ�
    concat = require('gulp-concat'),                //�ϲ��ļ�
    uglify = require('gulp-uglify'),                //jsѹ��
    minifycss = require('gulp-minify-css'),         //cssѹ��
    rev = require("gulp-rev"),          		    //md5����
    revCollector = require("gulp-rev-collector"),   //�滻���ܺ������·��
    mock = require("gulp-mock-server");             //����mock����

//����sass
gulp.task('sass', function () {
    gulp.src('dev/public/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/public/css/'));
});

//��������
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
////�ϲ��ļ�
//gulp.task('concat', function () {
//    gulp.src('src/js/!*.js')
//        .pipe(concat('concat.js'))
//        .pipe(gulp.dest('dist/js/'));
//});
//
////jsѹ��
//gulp.task('uglify', function () {
//    return gulp.src('dist/js/concat.js')
//        .pipe(uglify())
//        .pipe(rename('concat.min.js'))
//        .pipe(gulp.dest('dist/js/'))
//});
//
////cssѹ��
//gulp.task('minifycss', function () {
//    gulp.src('dist/css/styles.css')
//        .pipe(uglify())
//        .pipe(rename('styles.min.css'))
//        .pipe(gulp.dest('dist/css/'))
//});*/

////����mock����
//gulp.task('mockServer', function() {
//    gulp.src([".","./app/","./app/**/*"])
//        .pipe( mock({
//            port: 8090,
//            dirctoryListing:true,
//            allowCrossOrigin:true
//        }))
//});

/** �����仯����ˢ�� **/
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

/** �¼�����***/
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