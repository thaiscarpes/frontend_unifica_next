import UserModel from '@/utils/userModel'
import bcrypt from 'bcrypt'

//CADASTRAR UM USUÀRIO
export async function POST(request) {
    //COLETA OS DADOS DA REQUISIÇÃO
    const { email, password } = await request.json()
    //VERIFICA SE EXISTE UM USUÁRIO COM O MESMO EMAIL JÁ CADASTRADO
    const existingUser = await UserModel.findOne({ email })

    if (existingUser) {
        //SE JÁ EXISTE MOSTRAR MENSAGEM
        return Response.json({ message: 'Este email já está em uso' })
    }

    const hashedPassword = await bcrypt.hash(password, 5)

    const data = new UserModel({
        email: email,
        password: hashedPassword,
    })

    try {
        const savedUser = await data.save();
        return Response.json(savedUser)
    } catch (error) {
        return Response.json({ message: `Error: ${error}` })
    }
}