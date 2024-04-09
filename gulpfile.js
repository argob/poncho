var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass')(require('sass'));
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var SRC = './src/js/*.js';
var rename = require('gulp-rename');
const gulpIF = require('gulp-if');
var replace = require('gulp-replace');


var generalCompressOptions = {
    compress: {
        drop_console: true
    }
};

const ponchoMinList = [
    './src/js/utils/color.js',
    './src/js/utils/connect.js',
    './src/js/utils/string.js',
    './src/js/utils/html.js',
    './src/js/poncho-table/poncho-table.js',
    './src/js/poncho-agenda/poncho-agenda.js',
    './src/js/poncho-table/poncho-table-dependant.js',
    './src/js/utils/popover.js',
    './src/js/poncho-ubicacion/poncho-ubicacion.js',
    './src/js/poncho-charts/poncho-charts.js',
    './src/js/utils/gapi-legacy.js',
    './src/js/poncho-map/src/js/poncho-map.js',
    './src/js/poncho-map/src/js/poncho-map-filter.js',
    './src/js/poncho-map/src/js/poncho-map-search.js',
    './src/js/poncho-map-provinces/src/js/poncho-map-provinces.js',
    './src/js/gapi-sheet-data/gapi-sheet-data.js',
    './src/js/translate-html/translate-html.js'
];


gulp.task('poncho', function(){
    return gulp.src(ponchoMinList)
        .pipe(replace(/\/\/\s?\$START_TEST\$([\s\S]*?)\/\/\s?\$END_TEST\$/gm, '/* module.exports REMOVED */'))
        .pipe(concat('poncho.js', {'newLine':'\n\n'}))
        // .pipe(babel())
        .pipe(gulp.dest('dist/js/'));
});


/**
 * Compila y minifica los archivs JS en poncho.min.js
 */
gulp.task('ponchomin', function(){
    return gulp.src(ponchoMinList)
        .pipe(
            replace(
                /\/\/\s?\$START_TEST\$([\s\S]*?)\/\/\s?\$END_TEST\$/gm, 
                '/* module.exports REMOVED */'
            )
        )
        .pipe(concat('poncho.min.js'))
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('dist/js/'));
});


gulp.task('jshint', function(){
    return gulp.src([SRC], {"allowEmpty": true})
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


/**
 * Minifica los siguientes componentes
 * — Mapa de argentina en SVG
 * — Extensiones showdown markdown
 * — omponente para controlar las migas de pan en Argentina.gob.ar
 */
gulp.task('compress', function () {
    return gulp.src([
            './src/js/showdown-extensions/showdown-extensions.js',
            './src/js/mapa-argentina/mapa-argentina.js',
            './src/js/device-breadcrumb/src/js/device-breadcrumb.js',
            './src/js/national-holidays/src/js/national-holidays.js',
            './src/js/device-panel-menu/device-panel-menu.js'
        ])
        // .pipe(babel())
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('./dist/js/'));
});



/**
 * SASS
 */
gulp.task('sass', function(){
  return gulp.src([
        './src/scss/*.scss'
    ])
    // .pipe(sass())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulpIF(function(file){return file.path.match('poncho.css')}, rename('poncho.min.css')))
    .pipe(gulp.dest('./dist/css'))
});


/**
 * Compila los archivso SASS
 */
gulp.task('sass_poncho', function(){
  return gulp.src([
        './src/scss/poncho.scss',
        './src/js/device-breadcrumb/src/scss/device-breadcrumb.scss',
    ])
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    // .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
});


/**
 * Compila los archivso SASS
 */
gulp.task('sass_poncho-map', function(){
  return gulp.src([
        './src/scss/poncho-map.scss'
    ])
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    // .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
});



gulp.task('default', gulp.series( 'sass', 'sass_poncho', 'compress', 'poncho', 'ponchomin', "sass_poncho-map"))