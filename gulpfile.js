/*
 * Gulpfile for annotating angular app
 * joel@worketc
 */

var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate'); 
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src(['app.js']) // path to libraries you want to include
    .pipe(ngAnnotate({ add: true })) //ngAnnotate() before uglify!
     // .pipe(uglify()) // uglify (uncomment to test)
     // .pipe(concat('all.min.js')) // minified and uglified
       .pipe(concat('all.js')) // unminified (but make sure uglify is commented out)
    .pipe(gulp.dest('build/js'))
});
