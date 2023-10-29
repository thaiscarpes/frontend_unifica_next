import UserModel from '@/utils/userModel'

//LISTAR UMA LOCALIZAÇÃO ESPECÍFICA
export async function GET(request, { params }) {
    const email = params.id

    try {
        const user = await UserModel.find({ email: email })
        return Response.json(user)
    } catch (error) {
        return Response.json({ message: `Error: ${error}` })
    }
}