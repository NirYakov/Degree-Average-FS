

export function round2AfterThePoint(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}


export function round0AfterThePoint(num: number) {
  return Math.round((num + Number.EPSILON));
}

export function titleCase(line: string) {
  return line.toLowerCase().split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

export function showWith2PointsAfterDecimal(num: number) {
  return (round2AfterThePoint(num)).toFixed(2);
}
