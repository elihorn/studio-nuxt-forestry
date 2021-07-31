const { src, dest } = require('gulp');
const markdownToJSON = require('gulp-markdown-to-json');
const marked = require('marked');
const file = require('gulp-file');
const log = require('fancy-log');

function media() {
  log('start');
  return src('content/works/*.md').pipe(
    markdownToJSON(marked, function (d) {
      if (d.media && d.slug) {
        for (c in d.media) {
          const e = d.slug;
          log(e);
          saveMD(e + '/' + c + '.md', 'content/works');
        }
      }
    })
  );
}

function saveMD(src, destination) {
  return file(src, '').pipe(dest(destination));
}

exports.media = media;
