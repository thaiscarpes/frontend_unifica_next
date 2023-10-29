import UserModel from '@/utils/userModel'
import database from '@/utils/database'
import NextAuth from 'next-auth'
import bcrypt from 'bcrypt'
import { CredentialsProvider } from 'next-auth/providers'

const options = NextAuth({
    // providers: [
    //     CredentialsProvider({
    //         id: "Credentials",
    //         name: "Credentials",
    //         async authorize(credentials) {
    //             await connect()

    //             try {
    //                 const user = await UserModel.findOne({
    //                     email: credentials.email,
    //                 })
                    
    //                 if (user) {
    //                     const validPassword = await bcrypt.compare(
    //                         credentials.password,
    //                         user.password
    //                     )

    //                     if (validPassword) {
    //                         return user
    //                     } else {
    //                         throw new Error("Credenciais erradas!")
    //                     }
    //                 }

    //             } catch (error) {
    //                 throw new Error(error)
    //             }
    //         }
    //     })
    // ],
    // pages: {
    //     error: "/login"
    // }
})

//export { options as GET, options as POST }