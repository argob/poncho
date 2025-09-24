var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass')(require('sass'));
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var SRC = './src/js/*.js';
var rename = require('gulp-rename');
const gulpIF = require('gulp-if');


var generalCompressOptions = {
    compress: {
        drop_console: true,
        outputStyle: 'compressed'
    }
};

const ponchoMinList = [
    './src/js/color/src/js/color-definitions.js',
    './src/js/color/src/js/color.js',
    './src/js/color/src/js/color-variations.js',
    './src/js/utils/connect.js',
    './src/js/utils/string.js',
    './src/js/utils/html.js',
    './src/js/utils/document.js',
    './src/js/utils/collections.js',
    './src/js/poncho-table/poncho-table.js',
    './src/js/poncho-agenda/src/js/poncho-agenda.js',
    './src/js/poncho-table/poncho-table-dependant.js',
    './src/js/utils/popover.js',
    './src/js/poncho-ubicacion/poncho-ubicacion.js',
    './src/js/poncho-charts/poncho-charts.js',
    './src/js/utils/gapi-legacy.js',
    './src/js/poncho-map/src/js/poncho-map.js',
    './src/js/poncho-map/src/js/poncho-map-filter.js',
    './src/js/poncho-map/src/js/poncho-map-search.js',
    './src/js/poncho-map-provinces/src/js/poncho-map-provinces.js',
    // './src/js/poncho-map-provinces/src/js/poncho-map-provinces-contenidos.js',
    './src/js/gapi-sheet-data/gapi-sheet-data.js',
    './src/js/translate-html/translate-html.js',
    './src/js/loader/src/js/loader.js',
];


gulp.task('poncho', function(){
    return gulp.src(ponchoMinList)
        .pipe(concat('poncho.js', {'newLine':'\n\n'}))
        // .pipe(babel())
        .pipe(gulp.dest('dist/js/'));
});


/**
 * Compila y minifica los archivs JS en poncho.min.js
 */
gulp.task('ponchoMapProvincesContenidos', function(){
    return gulp.src(['./src/js/poncho-map-provinces/src/js/poncho-map-provinces-contenidos.js'])
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('./dist/js/'));
});


/**
 * Compila y minifica los archivs JS en poncho.min.js
 */
gulp.task('ponchomin', function(){
    return gulp.src(ponchoMinList)
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
            // './src/js/showdown-extensions/dist/showdown-extensions.js',
            './src/js/mapa-argentina/mapa-argentina.js',
            './src/js/device-breadcrumb/src/js/device-breadcrumb.js',
            './src/js/national-holidays/src/js/national-holidays.js',
            './src/js/device-panel-menu/device-panel-menu.js'
        ])
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('./dist/js/'));
});


// MARKDOWN
const markdownFiles = [
    "./src/js/showdown-extensions/src/utils.js",
    "./src/js/showdown-extensions/src/alert.js",
    "./src/js/showdown-extensions/src/image.js",
    "./src/js/showdown-extensions/src/table.js",
    "./src/js/showdown-extensions/src/button.js",
    "./src/js/showdown-extensions/src/details.js",
    "./src/js/showdown-extensions/src/eje.js",
    "./src/js/showdown-extensions/src/numbers.js",
    "./src/js/showdown-extensions/src/target.js",
    "./src/js/showdown-extensions/src/video.js"
]
/**
 * Minifica los siguientes componentes
 * — Mapa de argentina en SVG
 * — Extensiones showdown markdown
 * — omponente para controlar las migas de pan en Argentina.gob.ar
 */
gulp.task('js-dist-showdown-extensions', function () {
    return gulp.src(markdownFiles)
        .pipe(concat('showdown-extensions.js'))
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('./src/js/showdown-extensions/dist/'));
});

// Envia el archivo a main dist
gulp.task('js-showdown-extensions', function () {
    return gulp.src(markdownFiles)
        .pipe(concat('showdown-extensions.js'))
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



/**
 * Poncho table
 */
gulp.task('sass_poncho-table', function(){
    return gulp.src([
            './src/js/poncho-table/src/scss/poncho-table-1.1.scss'
        ])
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});


/**
 * GeoJson provincias
 */
gulp.task('compress-geojson-provincias', function () {
    return gulp.src([
            './src/js/geo-provincias-argentinas/geo-provincias-argentinas.json'
        ])
        .pipe(gulp.dest('./dist/jsons/'));
});

/**
 * Copia imágenes al directorio dist/img {encoding: false}
 */
gulp.task('copy-images', function () {
    return gulp.src(
            './src/js/poncho-map-provinces/src/img/*.*',
            {encoding: false}
        )
        .pipe(gulp.dest('./dist/img/'));
});


gulp.task('default', gulp.series(
    'ponchoMapProvincesContenidos',
    'sass',
    'sass_poncho',
    'compress',
    'poncho',
    'ponchomin',
    "sass_poncho-map",
    "sass_poncho-table", 
    "js-showdown-extensions",
    "js-dist-showdown-extensions",
    "compress-geojson-provincias",
    "copy-images"
))