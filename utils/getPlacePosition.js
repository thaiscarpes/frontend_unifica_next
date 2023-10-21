module.exports = async function getPlacePosition(id) {

  const res = await fetch(`http://localhost:3000/api/locations/${id}`)
  const data = await res.json()
  const placeCoords = [data.pointer.coordinates[0], data.pointer.coordinates[1]]

  return placeCoords
}