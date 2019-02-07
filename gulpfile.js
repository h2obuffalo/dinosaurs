let gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");
let rename = require("gulp-rename");
let sass = require("gulp-sass");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify-es").default;
let browserSync = require("browser-sync").create();

gulp.task("sass", () => {
    return gulp.src("./scss/styles.scss")
               .pipe(sass())
               .pipe(gulp.dest("./dist/css/"))
               .pipe(rename("styles.css"))
               .pipe(browserSync.stream());
});

gulp.task("minify-css", () => {
    return gulp.src("./dist/css/styles.css")
               .pipe(cleanCSS({compatibility: "ie8"}))
               .pipe(rename({suffix: ".min"}))
               .pipe(gulp.dest("./dist/css/"))
               .pipe(browserSync.stream());
});



gulp.task("styles", gulp.series("sass", "minify-css"));

gulp.task("watch-css", () => {
    return gulp.watch("./scss/*.scss", gulp.series("styles"));
});


gulp.task("minify-js", () => {
    return gulp.src("./js/*.js")
               .pipe(concat("all.js"))
               .pipe(uglify())
               .pipe(rename({suffix: ".min"}))
               .pipe(gulp.dest("./dist/js/"))
               .pipe(browserSync.stream());
});


gulp.task("watch-js", () => {
    return gulp.watch("./js/*.js", gulp.series("minify-js"));
});


gulp.task("watch", () => {
    return gulp.watch(["./js/*.js", "./scss/*.scss"], gulp.series("styles", "minify-js"));
});


gulp.task("browserSync", () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });    
    gulp.watch("./scss/*.scss", gulp.series("styles"))
    gulp.watch("./js/*.js", gulp.series("minify-js"))
    // gulp.watch(["./js/*.js", "./scss/*.scss"], gulp.series("styles", "minify-js"));    

});