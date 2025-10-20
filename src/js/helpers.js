const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function(url) {
  try {
    
    const res = await fetch(url);
    const data = await res.json();

    //if (!data.okay) return;

    return data;
  } catch (err) {
    throw err;
  }
}

export const fraction = (decimal) => {
  if (Number.isInteger(decimal)) return `${decimal}`;

  const whole = Math.floor(decimal);

  const fractionPart = decimal - whole;

  const str = fractionPart.toString();
  const decimalPlaces = str.split('.')[1].length;
  const denominator = Math.pow(10, decimalPlaces);
  const numerator = Math.round(fractionPart * denominator);

  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  const divisor = gcd(numerator, denominator);

  if(whole > 0) return`${whole} ${numerator / divisor}/${denominator / divisor}`;
  
  if(whole === 0) return`${numerator / divisor}/${denominator / divisor}`;
}
