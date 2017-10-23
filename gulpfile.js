'use strict';

//devDependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require ('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
// var server = require('gulp-server-livereload');
var imagemin = require('gulp-imagemin');

//Compress images
gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/Assets/images'))
);

//JSX to Javascript
gulp.task('babel', function(){
    return gulp.src('src/jsx/*.jsx').
        pipe(babel({
            plugins: ['transform-react-jsx']
        })).
        pipe(gulp.dest('src/js/main.js'));
});

//Web server
// gulp.task('webserver', function() {
//   gulp.src('./public/index.html')
//     .pipe(server({
//       livereload:       true,
//       directoryListing: true,
//       open:             true,
//     }));
// });

//SCSS/CSS
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';


//Compile SCSS
gulp.task('compile_scss',function(){
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error',sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min' }))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));
})

//detect changes in CSS
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
})

//Run tasks
gulp.task('default',['watch_scss','babel','imagemin']); //'webserver'
