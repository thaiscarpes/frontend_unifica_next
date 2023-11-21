//FUNLÇAI QUE RECEBE UMA DISTANCIA EM GRAUS E CONVERTE A MESMA PARA METROS
module.exports = function convertToMeters(distanceInDegrees) {
    const degreesToMeters = 111320 // Aproximadamente 111.32 km em metros

    const degreesDistance = distanceInDegrees // Distância em graus

    const metersDistance = degreesDistance * degreesToMeters

    return metersDistance
}