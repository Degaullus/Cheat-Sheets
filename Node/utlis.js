//module.exports = {} //empty object is the standart to export

module.export = "i am a module"

//////////////////////////////////////
//let's export something bigger.

const addRainbows = (text) =>'$🌈{text}🌈; 

module.export = addRainbows; 

///////////////////////////
//if multiple function ? define them. and create object ``


const addRainbows = (text) =>'$🌈{text}🌈; 
const addDbleRainbows = (text) =>'$🌈{text}🌈; 
const addMoreRainbows = (text) =>'$🌈{text}🌈; 

module.export = {addRainbows, addDbleRainbows, addMoreRainbows}; 