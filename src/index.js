const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const encodedLetters = [];
  for (let i = 0; i < expr.length; i += 10) {
    encodedLetters.push(expr.slice(i, i + 10));
  }
  const letters = encodedLetters.map(encodedLetter => {
    if (encodedLetter === '**********') {
      return ' ';
    }
    const letterArr = [];
    for (let i = 0; i < expr.length; i += 2) {
      letterArr.push(encodedLetter.slice(i, i + 2) === '10'
        ? '.'
        : encodedLetter.slice(i, i + 2) === '11'
          ? '-'
          : '');
    }
    const morseEncodedLetter = letterArr.join('');
    const letter = MORSE_TABLE[morseEncodedLetter];
    return letter;
  });
  return letters.join('');
}

module.exports = {
    decode
}