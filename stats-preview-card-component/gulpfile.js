// Initialize modules
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
// const babel = require("gulp-babel");
// const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// Use dart-sass for @use
//sass.compiler = require('dart-sass');

// Sass Task
function scssTask() {
  return src("./scss/style.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("css", { sourcemaps: "." }));
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("*.html", browserSyncReload);
  watch(["./scss/**/*.scss"], series(scssTask, browserSyncReload));
}

// Default Gulp Task
exports.default = series(scssTask, browserSyncServe, watchTask);

// const gulp = require("gulp");
// const sass = require("gulp-sass")(require("sass"));
// const browserSync = require("browser-sync").create();

// // compile scss into css
// function style() {
//   // 1. where is my scss file
//   return (
//     gulp
//       .src("./scss/**/*.scss")
//       // 2. pass that file through sass compiler
//       .pipe(sass())
//       // 3. where do I save the compiled css?
//       .pipe(gulp.dest("./css"))
//       // 4. stream changes to all browsers
//       .pipe(browserSync.stream())
//   );
// }

// function watch() {
//   browserSync.init({
//     server: {
//       baseDir: "./",
//     },
//   });
//   gulp.watch("./scss/**/*.scss", style);
//   gulp.watch("./*.html").on("change", browserSync.reload);
//   // gulp.watch('./scss/**/*.scss')
// }

// exports.style = style;
// exports.watch = watch;
