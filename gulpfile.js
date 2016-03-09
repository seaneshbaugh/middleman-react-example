var gulp, babel, concat, sourcemaps, jsFiles;

gulp = require("gulp");
babel = require("gulp-babel");
concat = require("gulp-concat");
sourcemaps = require("gulp-sourcemaps");

jsFiles = {
    vendor: [
        "./node_modules/react/dist/react.js",
        "./node_modules/react-dom/dist/react-dom.js"
    ],
    source: [
        "./source/javascripts/**/*"
    ]
}

gulp.task("concat", function() {
    return gulp.src(jsFiles.vendor.concat(jsFiles.source))
        .pipe(sourcemaps.init())
        .pipe(babel({
            compact: false
        }))
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist/javascripts/"));
});

gulp.task("watch", function() {
    gulp.watch("./source/javascripts/**/*", ["concat"]);
});

gulp.task("default", ["concat", "watch"]);
