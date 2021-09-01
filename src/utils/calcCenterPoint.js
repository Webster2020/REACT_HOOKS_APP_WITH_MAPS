export const calcCenterPointLat = (selectedCityA, selectedCityB) => {
  return (
    0.5 *
    (Number(selectedCityA.lat) + Number(selectedCityB.lat))
  ).toString();
};

export const calcCenterPointLng = (selectedCityA, selectedCityB) => {
  return (
    0.5 *
    (Number(selectedCityA.lng) + Number(selectedCityB.lng))
  ).toString();
};
