import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { DeletandoHamburguer } from "../../usecases/hamburgueres/deleteHamburguer";
import { prisma } from "./createHamburguer";

export class DeleteHamburguerController{
  async handle(req: Request, res: Response){
    const { nome } = req.params;
    try{
      const testeHamburguer = await prisma.hamburguer.findUnique({
        where: {
            nome: nome
        }
      })
      if(testeHamburguer == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Esse hamburguer não existe"})
      }

      const deleteHamburguer = new DeletandoHamburguer();
      const deletadoHamburguer = await deleteHamburguer.execute(nome);

      return res.status(StatusCodes.OK).send({
        deletadoHamburguer,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha ao buscar pelo hamburguer"});
    }
  }
}