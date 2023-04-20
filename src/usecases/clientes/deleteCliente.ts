import { PrismaClient, Cliente } from '@prisma/client'
const prisma = new PrismaClient()

export class DeletandoClient {
  async execute(cpf:string):Promise<Cliente>{
    const deletarClient = await prisma.cliente.delete({
      where: {
        cpf: cpf,
      },
    });
    return deletarClient;
  }
}