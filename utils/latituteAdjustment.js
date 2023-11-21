//FUNÇÃO PARA REDUZIR A LATIDUTE DE UMA COORDENADA ESPECÍFICA
module.exports = function altituteAdjustment(originalLatitude, altitudeChangeMeters) {
  const latitudeRad = (originalLatitude * Math.PI) / 180
  const latDegreeChange = (altitudeChangeMeters / 11132.0) * (180 / Math.PI)
  const newLatitude = originalLatitude + latDegreeChange
  return newLatitude
}

//ESTA FUNÇÃO FOI UTILIZADA NO MAPA QUANDO SEGUINDO UM LOCAL
//ASSIM QUE UN LOCAL ENTRA EM DESTAQUE, A CAMERA DO MAPA DEVERÁ SE APROXIMAR DO LOCAL
//DEVI A CAMERA DEIXAR O LOCAL EM DESTAQUE NA METADE INFERIOR DA TELA, ESTÁ FUNÇÃO TEM POR OBJETIVO,
//AUMENTAR A LATITUDE DA CAMERA PARA QUE O LOCAL FIQUE NO CENTRO DA TELA