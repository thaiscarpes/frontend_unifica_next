module.exports = function getDistanceFromLatLonInKm(point1, point2) {
    const earthRadius = 6371000 // Radius of the Earth in km

    // Converter graus para radianos
    const toRadians = (degrees) => (degrees * Math.PI) / 180

    // Extrair as latitudes e longitudes das coordenadas
    const lat1 = point1[0]
    const lon1 = point1[1]
    const lat2 = point2[0]
    const lon2 = point2[1]

    // Converter as coordenadas de graus para radianos
    const lat1Rad = toRadians(lat1)
    const lon1Rad = toRadians(lon1)
    const lat2Rad = toRadians(lat2)
    const lon2Rad = toRadians(lon2)

    // Diferenças nas latitudes e longitudes
    const dLat = lat2Rad - lat1Rad
    const dLon = lon2Rad - lon1Rad

    // Fórmula de Haversine para calcular a distância
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = earthRadius * c

    // Formatar a distância em metros
    const formattedDistance = distance.toFixed(2) // Duas casas decimais

    return formattedDistance
}  