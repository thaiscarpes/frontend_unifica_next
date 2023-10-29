import UserModel from '@/utils/userModel'
import bcrypt from 'bcrypt'

//CADASTRAR UM USUÀRIO
export async function POST(request) {
    const { email, password } = await request.json()

    const existingUser = await UserModel.findOne({ email })

    if (existingUser) {
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