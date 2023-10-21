import database from '@/utils/database'
import LocationModel from '@/utils/locationModel'

//LISTAR UMA LOCALIZAÇÃO ESPECÍFICA
export async function GET(request, {params}) {
  const id = params.id

  try {
    const location = await LocationModel.find({_id:id})
    return Response.json(location)
  } catch (error) {
    return Response.json({message:`Error: ${error}`})
  }
}

//EDITAR UMA LOCALIZAÇÃO
export async function PUT(request, {params}) {
  const id = params.id
  const location = await request.json()

  try {
    const updatedLocation = await LocationModel.updateOne({_id: id}, location)
    return Response.json(updatedLocation)
  } catch (error) {
    return Response.json({message:`Error: ${error}`})
  }
}

//REMOVER UMA LOCALIZAÇÃO
export async function DELETE(request, {params}) {
  const id = params.id

  try {
    const delectedLocatoin = await LocationModel.findByIdAndDelete(id)
    return Response.json(delectedLocatoin)
  } catch (error) {
    return Response.json({message:`Error: ${error}`})
  }
}