import { PrismaClient, Cliente } from "@prisma/client";
const prisma = new PrismaClient()

export interface typeCliente{
  nome: string,
  cpf: string,
  celular: string,
  endereco: string
}

export class AtualizandoCliente {
  async execute({nome, cpf, celular, endereco}:typeCliente):Promise<Cliente>{
    const atualizarClient = await prisma.cliente.update({
      where: {
        cpf: cpf,
      },
      data: {
        nome: nome,
        cpf: cpf,
        celular: celular,
        endereco: endereco,
      }
    })
    return atualizarClient;
  }
}