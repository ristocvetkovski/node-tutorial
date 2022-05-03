// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm intall -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/pacakge)
// manual approach (create pacakge.json in teh root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

//npm i lodash
const _ = require('lodash')
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);