export const snakeToCamel = str => {
  return str.toLowerCase().replace(/([-_]\w)/g, g => g[1].toUpperCase());
}

export const toPascalCase = str => {
  let camelCase = snakeToCamel(str);
  let pascalCase = camelCase[0].toUpperCase() + camelCase.substr(1);
  return pascalCase;
}

export const toUnderscoreUpperCase = str => {
  return toUnderscoreCase(str).toUpperCase();
}

export const toUnderscoreCase = str => {
  return str.replace(/\.?([A-Z]+)/g, (x, y) => {
    return "_" + y.toLowerCase()
  }).replace(/^_/, "");
}

export const fetchCurrencySymbol = curr => {
  return curr ? `${curr} ` : 'PHP';
  // switch (curr) {
  //     case 'PHP':
  //         return '₱';
  //     case 'USD':
  //         return '$';
  //     default:
  //         return '₱';
  // }
}


export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export const toDecimal = (price, decimalPlaces) => {
  const priceString = price.toString();
  const pointIndex = priceString.indexOf('.');
  // Return the integer part if decimalPlaces is 0
  if (decimalPlaces === 0) {
    return priceString.substr(0, pointIndex);
  }

  // Return value with 0s appended after decimal if the price is an integer
  if (pointIndex === -1) {
    const padZeroString = '0'.repeat(decimalPlaces);

    return `${priceString}.${padZeroString}`;
  }

  // If numbers after decimal are less than decimalPlaces, append with 0s
  const padZeroLen = priceString.length - pointIndex - 1;
  if (padZeroLen > 0 && padZeroLen < decimalPlaces) {
    const padZeroString = '0'.repeat(padZeroLen);

    return `${priceString}${padZeroString}`;
  }

  return priceString.substr(0, pointIndex + decimalPlaces + 1);
};
export const toDecimalWithComma = (price, decimalPlaces) => {
  const priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const pointIndex = priceString.indexOf('.');
  // Return the integer part if decimalPlaces is 0
  if (decimalPlaces === 0) {
    return priceString.substr(0, pointIndex);
  }

  // Return value with 0s appended after decimal if the price is an integer
  if (pointIndex === -1) {
    const padZeroString = '0'.repeat(decimalPlaces);

    return `${priceString}.${padZeroString}`;
  }

  // If numbers after decimal are less than decimalPlaces, append with 0s
  const padZeroLen = priceString.length - pointIndex - 1;
  if (padZeroLen > 0 && padZeroLen < decimalPlaces) {
    const padZeroString = '0'.repeat(padZeroLen);

    return `${priceString}${padZeroString}`;
  }

  return priceString.substr(0, pointIndex + decimalPlaces + 1);
};

export const toDecimalWithCommaNew = (price, decimalPlaces) => {
  let priceString = price.toString();
  if (priceString.indexOf('.') >= 0) {
      const lastPart = priceString.substr(priceString.indexOf('.'));
      const firstPart = priceString.substr(0, priceString.indexOf('.'));
      priceString = firstPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      priceString = `${priceString}${lastPart}`;
  } else {
      priceString = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const pointIndex = priceString.indexOf('.');
  // Return the integer part if decimalPlaces is 0
  if (decimalPlaces === 0) {
      return priceString.substr(0, pointIndex);
  }

  // Return value with 0s appended after decimal if the price is an integer
  if (pointIndex === -1) {
      const padZeroString = '0'.repeat(decimalPlaces);

      return `${priceString}.${padZeroString}`;
  }

  // If numbers after decimal are less than decimalPlaces, append with 0s
  const padZeroLen = (priceString.length - pointIndex) - 1;
  if (padZeroLen > 0 && padZeroLen < decimalPlaces) {
      const padZeroString = '0'.repeat(padZeroLen);

      return `${priceString}${padZeroString}`;
  }

  return priceString.substr(0, pointIndex + decimalPlaces + 1);
};

export default fetchCurrencySymbol;
