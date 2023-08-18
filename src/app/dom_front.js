var browserify = require("browserify");
var babelify = require("babelify");

gulp.task('es6-compile', function() {
  browserify({ debug: true })
    .transform(babelify.configure({ presets: ["es2015","react", "stage-0"] }))
    .require("./public/src/javascripts/app.js", { entry: true })
    .bundle()
    .pipe(gulp.dest('./public/dest/javascripts'));
});