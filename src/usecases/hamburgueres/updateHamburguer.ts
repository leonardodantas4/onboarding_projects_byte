import { PrismaClient, Hamburguer } from "@prisma/client";
const prisma = new PrismaClient()

export interface typeHamburguer{
    nome: string,
    descricao: string,
    preco: number,
    ingredientes: string
}

export class AtualizandoHamburguer {
  async execute(id:string, {nome, descricao, preco, ingredientes}:typeHamburguer):Promise<Hamburguer>{
    const atualizarHamburguer = await prisma.hamburguer.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        descricao: descricao,
        preco: preco,
        ingredientes: ingredientes,
      }
    })
    return atualizarHamburguer;
  }
}