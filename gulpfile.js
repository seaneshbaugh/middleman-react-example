var babel, concat, gulp;

babel = require("gulp-babel");
concat = require("gulp-concat");
gulp = require("gulp");

gulp.task("default", function() {
    return gulp.src([
        "./node_modules/react/dist/react.js",
        "./node_modules/react-dom/dist/react-dom.js",
        "./source/javascripts/**/*"])
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./dist/javascripts/"));
});
