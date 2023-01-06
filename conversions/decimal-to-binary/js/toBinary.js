/**
 * Decimal to binary conversion (recursive)
 * @param {Number} dec base-10 number
 * @returns {Array} binary number as integer array
 */
function toBinary(dec) {
  let bin = [];
  let quotient = Math.floor(dec / 2.0);
  let remainder = dec % 2;
  if (quotient > 0) {
    bin = [...bin, ...toBinary(quotient)];
  }
  bin.push(remainder);
  return bin;
}

/**
 * Helper function to log binary array as string
 * @param {Array} seq
 * @returns {String}
 */
function asString(seq) {
  let str = "";
  seq.forEach((x) => {
    str += String(x);
  });
  return str;
}

/* Test */
[...new Array(16).keys()].map((x) => console.log(`decimal: ${x} --> binario ${asString(toBinary(x))}`));
