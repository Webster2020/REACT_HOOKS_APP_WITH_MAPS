import cities from 'cities.json';

export const findCityCoordsArr = (cityName) => {
  const citiesArr = [];
  let m = 0;
  for (let i = 1; i < 1287; i++) {
    for (let j = 1 + i * 100; j < 100 + i * 100; j++) {
      if (cities[j].name === cityName) {
        citiesArr.push(cities[j]);
        m = m + 1;
      }
    }
  }
  for (let k = 128701; k < 128769; k++) {
    if (cities[k].name === cityName) {
      citiesArr.push(cities[k]);
      m = m + 1;
    }
  }
  if (m === 0) {
    alert('Wrong city name! Choose another city!');
    return citiesArr;
  } else {
    return citiesArr;
  }
};
