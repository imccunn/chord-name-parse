
var enMods = require('./utils').capGroupDescription;

function PitchClass(pitch){
  this.pitch = pitch || -1;

  this.modify = function(modifier){
    this.pitch += pitchModifier[modifier];
  };

}

function Chord(cname){

  this.cname = cname;
  this.pcset = [0,4,7];
  this.quality = quality;

  this.init = function() {
    //set cname and pcset
  }
}

Chord.prototype.chordNameToSet = function() {

  //Format includes slash notation
  var rxResult = chordRex.exec(this.cname);

  if(!chordRex.test(this.cname)){

    return console.log("Incorrect Chord Format to determine set.");

  } else {

    for (var i = 2; i < 15; i++){
      switch (rxResult[i]){
        case null : break;
        case 'mM' : this.pcset[1] = 3; this.pcset.push(11);
          break;
        case 'm' : this.pcset[1] = 3;
          break;
        case 'M' : this.pcset[1] = 4;
          break;
      }
    }
    //Process number following root PC (C9, C7)

    return;

  }
}

function chordMemberModifier(modifier){
  var mod = modifier;
}

// ***************************
// translateChordalModifiers()
//
//
// @param chordalModifier
// @return affectedPC, chordMember
function translateChordalModifiers(chordalModifier){
  var cm = chordalModifier,
    chPC = -1,
    chordalPCMember = chordMember.root;

  switch (cm){
    case 'b2' : chPC = 1;
      break;
    case 'sus2':
    case 'add2': chPC = 2;
      break;
    case 'm' : chPC = 3;
      break;
    case 'M' : chPC = 4;
      break;
    case 'sus4' : chPC = 5;
      break;
  }
}

function findSet(mainChord) {

  //SAVED REGEX LINK: http://regex101.com/r/mN2sU1
  var re = /([A-Ga-g])(#|b)?([Mm])?([Mm])?(hd|dim)?([1-9][13]?)?(sus)?(\+|aug)?([#|b])?([1-9]?[1-9])?(add2|add4)?(omit)?([2-9])?(\/[A-Ga-g])?([#|b])?/;
  console.log("chord: " + mainChord);

  var rxResult = re.exec(mainChord);
  var things = [];
  if (!re.test(mainChord)) {
    throw new Error('Bad chord symbol.');
  } else {

    for (var i = 0; i < rxResult.length; i++) {
      if (!rxResult[i]) things.push(-1);
      else things.push(rxResult[i]);
    }
    return things;
  }
}

module.exports = findSet;
