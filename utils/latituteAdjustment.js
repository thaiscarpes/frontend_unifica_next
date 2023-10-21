module.exports = function altituteAdjustment(originalLatitude, altitudeChangeMeters) {
  const latitudeRad = (originalLatitude * Math.PI) / 180
  const latDegreeChange = (altitudeChangeMeters / 11132.0) * (180 / Math.PI)
  const newLatitude = originalLatitude + latDegreeChange
  return newLatitude
}
