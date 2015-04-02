'use strict';

module.exports = {
  chordMember: {
  	root: 0,
  	second: 2,
  	third: 4,
  	fourth: 5,
  	fifth: 7,
  	sixth: 9,
  	seventh: 11
  },
  pitchModifier: {
  	'bb': -2,
  	'b': -1,
  	'#': 1,
  	'##': 2,
  	'+' : 1,
  	'dim' : -1,
  	'o' : -1,
  	'aug' : 1
  },
  capGroupDescription: {
    0: 'chord',
  	1: 'root',
  	2: 'sign/acc',
  	3: '3 quality',
  	4: '7 quality',
  	5: 'dim/hd',
  	6: 'add/extension',
  	7: 'sus',
  	8: '5 aug',
  	9: 'sign extension',
  	10: 'extended',
  	11: 'add',
  	12: 'omit indicator',
  	13: 'omit note',
  	14: 'slash chord root',
  	15: 'slash sign/acc'
  }
};
