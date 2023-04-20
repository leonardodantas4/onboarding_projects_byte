import { PrismaClient, Hamburguer } from '@prisma/client'
const prisma = new PrismaClient()

export interface typeHamburguer{
    nome: string,
    descricao: string,
    preco: number,
    ingredientes: string
}

export class CriandoHamburguer{
    async execute({nome,descricao,preco,ingredientes}:typeHamburguer): Promise<Hamburguer>{
        const novoHamburguer = await prisma.hamburguer.create({
            data:{
                nome: nome,
                descricao: descricao,
                preco: preco,
                ingredientes: ingredientes
            }
        })
        return novoHamburguer;
    }
}
