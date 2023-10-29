import UserModel from '@/utils/userModel'

//LISTAR TODOS OS USUÁRIOS
export async function GET() {
    try {
        const users = await UserModel.find()
        return Response.json(users)
    } catch (error) {
        return Response.json({ message: `Error: ${error}` })
    }
}