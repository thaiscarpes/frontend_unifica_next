// FUNÇÃO QUE RECEBE O ID DE UMA LOCALIZAÇÃO E BUSCA NO BANCO DE DADOS AS COORDENADAS DO LOCAL
// PARA DESTAQUE NO MAPA QUANDO NO ESTADO SEGUINDO
module.exports = async function getPlacePosition(id) {

  const res = await fetch(`http://localhost:3000/api/locations/${id}`)
  const data = await res.json()
  const placeCoords = [data.pointer.coordinates[0], data.pointer.coordinates[1]]

  return placeCoords
}