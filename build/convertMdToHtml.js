const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, language) {
    const hl = require('highlight.js');
    const validLanguage = hl.getLanguage(language) ? language : 'plaintext';
    return hl.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

module.exports = marked;