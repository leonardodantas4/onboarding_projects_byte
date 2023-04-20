import { PrismaClient, Cliente } from '@prisma/client'
const prisma = new PrismaClient()

export class DeletandoCliente {
  async execute(cpf:string):Promise<Cliente>{
    const deletarCliente = await prisma.cliente.delete({
      where: {
        cpf: cpf,
      },
    });
    return deletarCliente;
  }
}