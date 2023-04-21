import { Hamburguer } from "@prisma/client";
import { prisma } from "../clienteController/createCliente";

export interface typeHamburguer {
    nome: string,
    descricao: string,
    ingredientes: string,
    preco: number
  }
  
  export class CreateHamburguerController {
    handle(arg0: string, handle: any) {
        throw new Error("Method not implemented.");
    }
    async execute({nome, descricao, ingredientes, preco}:typeHamburguer):Promise<Hamburguer>{
      const newHamburguer = await prisma.hamburguer.create({
        data: {
          nome: nome,
          descricao: descricao,
          ingredientes: ingredientes,
          preco: preco
        }
      })
  
      return newHamburguer;
    }
  }

export { prisma };
