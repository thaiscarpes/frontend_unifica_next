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

//NOTA DE IMPLEMENTAÇÃO FUTURA:
// - SERÁ ADICIONADO UMA VERIFICAÇÃO INICIAL NAS ROTAS "POST" PARA BUSCAR OS USUÁRIOS AUTORIZADOS DIRETAMENTE DO BANCO DE DADOS;
// - SERÁ FEITA A VERIFICAÇÃO DE SESSÃO INICIADA COM O NEXT-AUTH, ASSIM COLETANDO O E-MAIL DO USUÁRIO AUTENTICADO, E VERIFICADO SE O MESMO TEM AUTORIZAÇÃO PARA FAZER A OPERAÇÃO;
// - SE O E-MAIL AUTENTICADO ESTÁ EM UM DOS REGISTROS DE USUÁRIOS CADASTRADIS NO BANCO DE DADOS, A REQUISIÇÃO PODERÁ SER EXECUTADA. 