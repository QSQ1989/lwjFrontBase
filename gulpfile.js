var gulp = require('gulp');
var del = require('del');
var path = require('path');
var src = path.join(__dirname, './src')

gulp.task('clean:lwj', function (cb) {
  del([
    src + 'components/**/*'
  ], cb);
});

gulp.task('copy-lwj', () =>
  gulp.src([path.join(__dirname, './node_modules/lwj-ui-model-react/build') + '/**/*'])
  .pipe(gulp.dest(src + '/components/'))
);

gulp.task('default', ['clean:lwj', 'copy-lwj']);
