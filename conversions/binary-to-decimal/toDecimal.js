/**
 * Binary to decimal conversion
 * @param {Array} bin binary array
 * @returns {Number}
 */
function toDecimal(bin) {
  const size = bin.length;
  let dec = 0;
  for (let i = 0; i < size; i++) {
    dec += bin[i] << (size - i - 1);
  }
  return dec;
}

function randomBinary(size) {
  return [1, ...[...new Array(Math.floor(Math.random() * size)).keys()].map(() => (Math.random() > 0.5 ? 1 : 0))];
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

function main() {
  console.log();
  for (let i = 0; i < 10; i++) {
    const bin = randomBinary(6);
    const dec = toDecimal(bin);
    console.log(`binary: ${asString(bin)}\t--> decimal: ${dec}`);
  }
}

main();
