const fs = require('fs');
const path = require('path');
const convertMdToHtml = require('./convertMdToHtml');

module.exports = (force = false) => {
  const comPath = path.resolve('src', 'home', 'Readme.html');
  if(!force && fs.existsSync(comPath) )
    return;

  const mdPath = path.resolve('..', 'spicyhtml', 'README.md');
  const md = fs.readFileSync(mdPath, 'utf8');

  let html = convertMdToHtml(md);

  const any = "\\s\\S";
  const logo = 'spicyhtml-logo.png';
  const exp = new RegExp(`<p>[${any}]*?${logo}[${any}]*?</p>`, 'g');
  html = html.replace(exp, '');
  fs.writeFileSync(comPath, html);
};
