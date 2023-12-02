import UserModel from '@/utils/userModel'

//LISTAR UM USUARIO ESPECÍFICO
export async function GET(request, { params }) {
    const email = params.id

    try {
        const user = await UserModel.find({ email: email })
        return Response.json(user)
    } catch (error) {
        return Response.json({ message: `Error: ${error}` })
    }
}

//DELETAR UM USUARIO 
export async function DELETE(request, { params }) {
    const email = params.id

    try {
        const user = await UserModel.deleteOne({_id: id})
        return Response.json(user)
    } catch (error) {
        return Response.json({ message: `Error: ${error}` })
    }
}