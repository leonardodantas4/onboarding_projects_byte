import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AtualizandoCliente } from "../../usecases/clientes/updateCliente";
import { prisma } from "./createCliente";

export class UpdateClienteController{
    async handle(req: Request, res: Response){
      const {nome, cpf, celular, endereco} = req.body;
  
      try{
        const testCliente = await prisma.cliente.findUnique({
          where: {
            cpf: cpf
          }
        })
        if(testCliente == null){
          return res.status(StatusCodes.UNAUTHORIZED).send({error: "Esse cliente não existe"})
        }
  
        const update = new AtualizandoCliente();
  
        //Atualizando Cliente
        const cliente = await update.execute({nome, cpf, celular, endereco});
  
        //Retornando Cliente Atualizado
        return res.status(StatusCodes.CREATED).send({
          cliente,
        },);
      } catch (err){
        return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha ao tentar atualizar cliente"});
      }
    }
  }