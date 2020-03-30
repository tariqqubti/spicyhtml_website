const fs = require('fs');
const path = require('path');
const spicyhtml = require('spicyhtml');
const writeReadme = require('./writeReadme');
const minifyHtml = require('./minifyHtml');

writeReadme(true);

const outputDir = 'docs'

spicyhtml.build({
  root: 'src',
  entry: 'home.index',
  props: {
    author: 'Tariq Qubti',
  },
  output: outputDir,
});

const builtPath = path.resolve(outputDir, 'home.index.html');
const built = fs.readFileSync(builtPath, 'utf8');
const minified = minifyHtml(built);
const minifiedPath = path.resolve(outputDir, 'index.html');
fs.writeFileSync(minifiedPath, minified);
