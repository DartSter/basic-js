const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(boolean=true) {
    this.reverse = boolean
  }

  encrypt(str, initKey) {
    if (!str || !initKey) {
      throw new Error("Incorrect arguments!");
    }
    let message = str.toUpperCase();
    let key = initKey.toUpperCase();
    let result = "";
    let replaceCount = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
        result += String.fromCharCode(
          ((message[i].charCodeAt() +
            (key[replaceCount % key.length].charCodeAt() - 130)) %
            26) +
            65
        );
        replaceCount++;
      } else {
        result += message[i];
      }
    }
    return  this.reverse? result : [...result].reverse().join('');
  }
  decrypt(str, initKey) {
    if (!str || !initKey) {
      throw new Error("Incorrect arguments!");
    }
    let message = str.toUpperCase();
    let key = initKey.toUpperCase();
    let result = "";
    let replaceCount = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
        result += String.fromCharCode(
          ((message[i].charCodeAt() -
            (key[replaceCount % key.length].charCodeAt() - 104)) %
            26) +
            65
        );
        replaceCount++;
      } else {
        result += message[i];
      }
    }
    return  this.reverse? result : [...result].reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
