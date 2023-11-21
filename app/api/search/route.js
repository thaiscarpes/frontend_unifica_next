import database from '@/utils/database'
import LocationModel from '@/utils/locationModel'

//BUSCAR UMA LOCALIZAÇÃO A PARTIR DE TERMOS DE BUSCA
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  const regexPattern = new RegExp(query, 'i')
  // return Response.json({query})
  // query is "hello" for /api/search?query=hello

  try {
    const locations = await LocationModel.find({ title: regexPattern })
    return Response.json(locations)
  } catch (error) {
    return Response.json({message:`Error: ${error}`})
  }
}