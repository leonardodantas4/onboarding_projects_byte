import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AtualizandoHamburguer } from "../../usecases/hamburgueres/updateHamburguer";
import { prisma } from "./createHamburguer";

export class UpdateHamburguerController{
  async handle(req: Request, res: Response){
    const {nome} = req.params;
    const {descricao, preco, ingredientes} = req.body;

    try{
      const testeHamburguer = await prisma.hamburguer.findUnique({
        where: {
          nome: nome
        }
      })
      if(testeHamburguer == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Esse hamburguer não existe"})
      }

      const update = new AtualizandoHamburguer();
      const hamburguer = await update.execute({nome, descricao, preco, ingredientes});

      return res.status(StatusCodes.CREATED).send({
        hamburguer,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha ao tentar atualizar hamburguer"});
    }
  }
}