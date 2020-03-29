const spicyhtml = require('spicyhtml');
const writeReadme = require('./writeReadme');

writeReadme();

spicyhtml.watch({
  root: 'src',
  entry: 'home.index',
  props: {
    author: 'Tariq Qubti',
  },
  output: 'public',
});
