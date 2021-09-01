export function findPointsCoordsArr(latA, latB, lngA, lngB) {
  const arrLatPoints = [latA, latB];
  const arrLngPoints = [lngA, lngB];
  let i = 0;
  let currentLatPoint;
  let currentLngPoint;
  const arrOfCoordsArr = [];
  while (
    Math.abs(
      arrLatPoints[arrLatPoints.length - 2] -
        arrLatPoints[arrLatPoints.length - 1]
    ) > 1 ||
    Math.abs(
      arrLngPoints[arrLngPoints.length - 2] -
        arrLngPoints[arrLngPoints.length - 1]
    ) > 1
  ) {
    currentLatPoint = 0.5 * (arrLatPoints[i] + arrLatPoints[i + 1]);
    currentLngPoint = 0.5 * (arrLngPoints[i] + arrLngPoints[i + 1]);
    arrLatPoints.push(currentLatPoint);
    if (latA - latB > 0) {
      arrLatPoints.sort(function (a, b) {
        return a - b;
      });
    } else {
      arrLatPoints.sort(function (a, b) {
        return b - a;
      });
    }

    arrLngPoints.push(currentLngPoint);
    if (lngA - lngB > 0) {
      arrLngPoints.sort(function (a, b) {
        return a - b;
      });
    } else {
      arrLngPoints.sort(function (a, b) {
        return b - a;
      });
    }
    if (i + 3 === arrLatPoints.length) {
      i = 0;
    } else {
      i = i + 2;
    }
  }
  arrLatPoints.shift();
  arrLatPoints.pop();
  arrLngPoints.shift();
  arrLngPoints.pop();

  for (let k = 0; k < arrLatPoints.length; k++) {
    arrOfCoordsArr.push([arrLatPoints[k], arrLngPoints[k]]);
  }
  return arrOfCoordsArr;
}
