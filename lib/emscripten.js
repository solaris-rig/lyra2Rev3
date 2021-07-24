'use strict';
const emscripten = require('./lyra2v3.js');
const Buffer = require('buffer').Buffer;
function emcc(ev){
    const cInput = ev.toString('hex', 0, ev.length + 1);
    const outputBufferPtr = emscripten.cwrap('digest','string', ['string']);
    const outputBuff = outputBufferPtr(cInput);
    return Buffer.from(outputBuff);
}
function digest(ev){
  return emcc(ev);
}
module.exports =
  {
    digest
  };
