import database from '@/utils/database'
import LocationModel from '@/utils/locationModel'

//LISTAR TODAS AS LOCALIZAÇÕES
export async function GET() {
  try {
    const locations = await LocationModel.find()
    return Response.json(locations)
  } catch (error) {
    return Response.json({message:`Error: ${error}`})
  }
}

//CADASTRAR UMA LOCALIZAÇÃO
export async function POST(request) {

  const location = await request.json()

  const pointer = {
    type: 'Point',
    coordinates: [location.longitude, location.latitude],
  }

  const data = new LocationModel({
    title:location.title,
    description:location.description,
    image:location.image,
    address:location.address,
    phone:location.phone,
    extension:location.extension,
    startJourney:location.startJourney,
    endJourney:location.endJourney,
    pointer:pointer
  })

  try {
    const savedLocation = await data.save();
    return Response.json(savedLocation)
  } catch (error) {
    return Response.json({message:`Error: ${error}`})
  }

}