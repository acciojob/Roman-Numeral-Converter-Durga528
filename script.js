/**
 * Converts a given integer into its Roman numeral representation.
 * Standard subtraction cases included: CM (900), CD (400), XC (90), XL (40), IX (9), IV (4).
 * Values >= 4000 accumulate 'M' (1000) repeatedly.
 *
 * @param {number} num - The number to convert (0 <= num <= 100000).
 * @returns {string} The Roman numeral representation in upper-case.
 */
function convertToRoman(num) {
  if (num === 0) return '';

  const romanLookup = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  for (let i = 0; i < romanLookup.length; i++) {
    const [symbol, value] = romanLookup[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// UI wiring
const numInput = document.getElementById('numInput');
const convertBtn = document.getElementById('convertBtn');
const resultBox = document.getElementById('result');

function handleConvert() {
  const value = parseInt(numInput.value, 10);

  if (isNaN(value) || value < 0) {
    resultBox.textContent = 'Please enter a valid non-negative number';
    return;
  }

  resultBox.textContent = convertToRoman(value) || 'None (0)';
}

convertBtn.addEventListener('click', handleConvert);

// Initial execution
handleConvert();