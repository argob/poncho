// Core
const gulp = require('gulp');

// JavaScript
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// CSS
const sass = require('gulp-sass')(require('sass'));

// Utilities
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const gulpIF = require('gulp-if');


const SRC = './src/js/*.js';

const sassCompressed = () =>
    sass.sync({outputStyle: 'compressed'})
        .on('error', sass.logError);

const isPonchoCSS = file => file.path.match('poncho.css');

const generalCompressOptions = {
    compress: {
        drop_console: true,
    }
};

const ponchoMinList = [
    // Color
    './src/js/color/src/js/color-definitions.js',
    './src/js/color/src/js/color.js',
    './src/js/color/src/js/color-variations.js',

    // Utils
    './src/js/utils/char-map.js',
    './src/js/utils/popover.js',
    './src/js/utils/collections/collections.js',
    './src/js/utils/connect/connect.js',
    './src/js/utils/copy-to-clipboard/copy-to-clipboard.js',
    './src/js/utils/gapi-legacy/gapi-legacy.js',
    './src/js/utils/head-style/head-style.js',
    './src/js/utils/replace-special-chars/replace-special-chars.js',
    './src/js/utils/secure-html/secure-html.js',
    './src/js/utils/slugify/slugify.js',
    './src/js/utils/to-title-case/to-title-case.js',

    './src/js/gapi-sheet-data/gapi-sheet-data.js',

    // PonchoTable
    './src/js/poncho-table/poncho-table.js',
    './src/js/poncho-table/poncho-table-dependant.js',
    './src/js/poncho-agenda/src/js/poncho-agenda.js',

    './src/js/poncho-ubicacion/poncho-ubicacion.js',
    './src/js/poncho-charts/poncho-charts.js',

    // PonchoMap
    './src/js/poncho-map/src/js/poncho-map.js',
    './src/js/poncho-map/src/js/poncho-map-filter.js',
    './src/js/poncho-map/src/js/poncho-map-search.js',
    './src/js/poncho-map/src/js/poncho-map-helpers.js',
    './src/js/poncho-map/src/js/poncho-map-schema.js',
    './src/js/poncho-map-provinces/src/js/poncho-map-provinces.js',

    // Translate
    './src/js/translate-html/translate-html.js'
];

const markdownFiles = [
    './src/js/showdown-extensions/src/utils.js',
    './src/js/showdown-extensions/src/alert.js',
    './src/js/showdown-extensions/src/image.js',
    './src/js/showdown-extensions/src/table.js',
    './src/js/showdown-extensions/src/button.js',
    './src/js/showdown-extensions/src/details.js',
    './src/js/showdown-extensions/src/eje.js',
    './src/js/showdown-extensions/src/numbers.js',
    './src/js/showdown-extensions/src/target.js',
    './src/js/showdown-extensions/src/video.js'
];


/**
 * Concatena los archivos de ponchoMinList en dist/js/poncho.js sin minificar.
 */
gulp.task('poncho', function(){
    return gulp.src(ponchoMinList)
        .pipe(concat('poncho.js', {'newLine':'\n\n'}))
        .pipe(gulp.dest('dist/js/'));
});


/**
 * Minifica poncho-map-provinces-contenidos.js y lo copia en dist/js/.
 */
gulp.task('ponchoMapProvincesContenidos', function(){
    const src = './src/js/poncho-map-provinces' +
        '/src/js/poncho-map-provinces-contenidos.js';
    return gulp.src([src])
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('./dist/js/'));
});


/**
 * Concatena y minifica los archivos de ponchoMinList en dist/js/poncho.min.js.
 */
gulp.task('ponchomin', function(){
    return gulp.src(ponchoMinList)
        .pipe(concat('poncho.min.js'))
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('dist/js/'));
});


/**
 * Ejecuta JSHint sobre los archivos JS de src/ e imprime el
 * reporte en consola.
 */
gulp.task('jshint', function(){
    return gulp.src([SRC], {"allowEmpty": true})
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


/**
 * Minifica componentes independientes y los copia en dist/js/:
 * — Mapa de Argentina en SVG
 * — Componente de migas de pan (device-breadcrumb)
 * — Feriados nacionales (national-holidays)
 * — Opening hours (vendor)
 * — Menú lateral de dispositivo (device-panel-menu)
 */
gulp.task('compress', function () {
    return gulp.src([
            './src/js/mapa-argentina/mapa-argentina.js',
            './src/js/device-breadcrumb/src/js/device-breadcrumb.js',
            './src/js/national-holidays/src/js/national-holidays.js',
            './src/vendors/opening-hours-js/opening_hours+deps.min.js',
            './src/js/device-panel-menu/device-panel-menu.js'
        ])
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('./dist/js/'));
});


/**
 * Concatena y minifica las extensiones de Showdown Markdown en
 * src/js/showdown-extensions/dist/ (artefacto intermedio del módulo).
 */
gulp.task('js-dist-showdown-extensions', function () {
    return gulp.src(markdownFiles)
        .pipe(concat('showdown-extensions.js'))
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('./src/js/showdown-extensions/dist/'));
});


/**
 * Concatena y minifica las extensiones de Showdown Markdown en dist/js/.
 */
gulp.task('js-showdown-extensions', function () {
    return gulp.src(markdownFiles)
        .pipe(concat('showdown-extensions.js'))
        .pipe(uglify(generalCompressOptions))
        .pipe(gulp.dest('./dist/js/'));
});


/**
 * Compila todos los archivos SCSS de src/scss/ en CSS comprimido.
 * Renombra poncho.css a poncho.min.css al escribir en dist/css/.
 */
gulp.task('sass', function(){
    return gulp.src(['./src/scss/*.scss'])
        .pipe(sassCompressed())
        .pipe(gulpIF(isPonchoCSS, rename('poncho.min.css')))
        .pipe(gulp.dest('./dist/css'));
});


/**
 * Compila poncho.scss y device-breadcrumb.scss en CSS comprimido en dist/css/.
 */
gulp.task('sass_poncho', function(){
    return gulp.src([
            './src/scss/poncho.scss',
            './src/js/device-breadcrumb/src/scss/device-breadcrumb.scss',
        ])
        .pipe(sassCompressed())
        .pipe(gulp.dest('./dist/css'));
});


/**
 * Compila poncho-map.scss en CSS comprimido en dist/css/.
 */
gulp.task('sass_poncho-map', function(){
    return gulp.src(['./src/scss/poncho-map.scss'])
        .pipe(sassCompressed())
        .pipe(gulp.dest('./dist/css'));
});


/**
 * Compila el SCSS de poncho-table en CSS comprimido en dist/css/.
 */
gulp.task('sass_poncho-table', function(){
    return gulp.src(['./src/js/poncho-table/src/scss/poncho-table-1.1.scss'])
        .pipe(sassCompressed())
        .pipe(gulp.dest('./dist/css'));
});


/**
 * Copia el GeoJSON de provincias argentinas en dist/jsons/.
 */
gulp.task('compress-geojson-provincias', function () {
    return gulp.src([
        './src/js/geo-provincias-argentinas' +
        '/geo-provincias-argentinas.json'
    ])
        .pipe(gulp.dest('./dist/jsons/'));
});


/**
 * Copia imágenes de src/img/ y poncho-map-provinces en dist/img/.
 */
gulp.task('copy-images', function () {
    return gulp.src([
            './src/img/*.*',
            './src/js/poncho-map-provinces/src/img/*.*'
        ], {encoding: false})
        .pipe(gulp.dest('./dist/img/'));
});


/**
 * Tarea por defecto: ejecuta el pipeline completo de compilación
 * y distribución.
 */
gulp.task('default', gulp.series(
    'ponchoMapProvincesContenidos',
    'sass',
    'sass_poncho',
    'compress',
    'poncho',
    'ponchomin',
    'sass_poncho-map',
    'sass_poncho-table',
    'js-showdown-extensions',
    'js-dist-showdown-extensions',
    'compress-geojson-provincias',
    'copy-images'
));
