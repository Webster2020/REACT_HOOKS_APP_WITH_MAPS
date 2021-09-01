export function getDistanceFromLatLngInKm(latA, lngA, latB, lngB) {
  const R = 6371;
  const dLat = deg2rad(latB - latA);
  const dLng = deg2rad(lngB - lngA);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(latA)) *
      Math.cos(deg2rad(latB)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Math.floor(d);
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
