'use strict';

var findSet = require('./parseChordSymbol');
var args = process.argv;
var log = console.log;

var enMods = require('./utils').capGroupDescription;

var capGroups = findSet(args[2]);

for (var i = 0; i < capGroups.length; i++) {
  log(i + '. ', enMods[i] + ': ', capGroups[i]);
}
