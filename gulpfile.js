const { src, dest, parallel, series, watch } = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const bs = require("browser-sync");
const uglify = require('gulp-uglify');

var paths = {
	sass: './app/src/sass/**/*.scss',
	css: './public/dist/css',
	js_src: './app/src/js/**/*.js',
	js: './public/dist/js',
	assets_src: './app/src/assets/**/*',
	assets: './public/dist/assets'
};

/* CSS Tasks */
/* SCSS bundled into compressed CSS */
function css() {
	return src(paths.sass)
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(prefix())
		.pipe(
			sass({
				outputStyle: "compressed"
			}).on("error", sass.logError)
		)
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write("maps"))
		.pipe(dest(paths.css));
}

/* JS Tasks */
/* JS bundled into min.js task */
function js() {
	return src(paths.js_src)
		.pipe(sourcemaps.init())
		.pipe(concat("_main.js"))
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write("maps"))
		.pipe(dest(paths.js));
}

function assets() {
	return src(paths.assets_src).pipe(dest(paths.assets));
}


/* Watch files on change */
function watchFiles() {
	watch(paths.sass, css);
	watch(paths.js_src, js);
	watch(paths.assets_src, assets);
}

const watching = parallel(watchFiles, bs.reload);

exports.css = css;
exports.js = js;
exports.assets = assets;
exports.prod = series(css, js);
exports.default = series(css, js, assets, watching);