var gulp = require('gulp');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var uglifyes = require('gulp-uglifyes');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var SRC = './src/js/*.js';
var DEST = './dist/js/*.js';


gulp.task('poncho', function(){
  return gulp.src([
          './src/js/poncho-table.js',
          './src/js/poncho-maps.js',
          './src/js/poncho-popover.js',
          './src/js/poncho-ubicacion.js',
          './src/js/poncho-charts.js',
          './src/js/poncho-gapi-legacy.js'
      ])
      .pipe(concat('poncho.js'))
      // .pipe(babel())
      .pipe(gulp.dest('dist/js/'));
});


// gulp.task('babel', function(){
//   return gulp.src([
//           './dist/js/poncho.js',
//           './dist/js/poncho.min.js',
//           './dist/js/showdown-extensions.js',
//           './dist/js/mapa-argentina.js'
//       ])
//       .pipe(babel())
//       .pipe(gulp.dest('dist/js/'));
// });


gulp.task('ponchomin', function(){
  return gulp.src([
          './src/js/poncho-table.js',
          './src/js/poncho-maps.js',
          './src/js/poncho-popover.js',
          './src/js/poncho-ubicacion.js',
          './src/js/poncho-charts.js',
          './src/js/poncho-gapi-legacy.js'
      ])
      .pipe(concat('poncho.min.js'))
      // si usamos uglifyes nos permite usar ES6
      .pipe(uglifyes({ 
        'mangle': false, 
        'ecma': 6 
      }))
      // Uglify compila modificando ES6 a ES5
      // .pipe(uglify())
      .pipe(gulp.dest('dist/js/'));
});


gulp.task('jshint', function(){
  return gulp.src([SRC], {"allowEmpty": true})
      .pipe(plumber())
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});


gulp.task('compress', function () {
  return gulp.src([
          './src/js/showdown-extensions.js',
          './src/js/mapa-argentina.js'
      ])
      .pipe(babel())
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'));
});


gulp.task('develop', gulp.series('compress', 'poncho', 'ponchomin'))