import { PrismaClient, Hamburguer } from '@prisma/client'
const prisma = new PrismaClient()

export class DeletandoHamburguer {
  async execute(nome:string):Promise<Hamburguer>{
    const deletarHamburguer = await prisma.hamburguer.delete({
      where: {
        nome: nome,
      },
    });
    return deletarHamburguer;
  }
}