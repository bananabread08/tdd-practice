const caesarCipher = (str, num) => {
  const isNotInRange = (char) => {
    return (
      char.charCodeAt(0) < 65 ||
      (char.charCodeAt(0) > 90 && char.charCodeAt(0) < 97) ||
      char.charCodeAt(0) > 122
    );
  };
  return Array.from(str)
    .map((char) => {
      let unshifted = char.charCodeAt(0);
      let shifted = char.charCodeAt(0) + num;
      if (Math.abs(num) % 26 > 1) num = num % 26;
      if (isNotInRange(char)) return char;
      if (unshifted >= 65 && unshifted <= 90) {
        if (shifted > 90) return String.fromCharCode(65 + num - 1);
        else if (shifted < 65) return String.fromCharCode(90 + num + 1);
      }
      if (unshifted >= 97 && unshifted <= 122) {
        if (shifted > 122) return String.fromCharCode(97 + num - 1);
        else if (shifted < 97) return String.fromCharCode(122 + num + 1);
      }
      return String.fromCharCode(shifted);
    })
    .join('');
};
console.log(caesarCipher('a', -1));
console.log(caesarCipher('z', 1));
console.log(caesarCipher('A', -1));
console.log(caesarCipher('Z', 1));
console.log(caesarCipher('Attack On Titan', 5));
console.log(caesarCipher('Mjqqt, Btwqi!', -5));
console.log(caesarCipher('wxyz', 5));
module.exports = caesarCipher;
