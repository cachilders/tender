'use strict';

const Command = use('Command');
const backpat = require('backpat').backpat;

class Stack extends Command {

  get signature () {
    return 'backpat';
  }

  get description () {
    return 'Print a list of dependencies';
  }

  * handle (args, options) {
    backpat((stack) => console.log(stack));
  }

}

module.exports = Stack;
