const minify = require('html-minifier').minify;

module.exports = html => {
  return minify(html, {
    collapseWhitespace: true,
  });
};
