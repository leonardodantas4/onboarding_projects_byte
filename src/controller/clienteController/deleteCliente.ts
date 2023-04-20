import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { DeletandoCliente } from "../../usecases/clientes/deleteCliente";
import { prisma } from "./createCliente";

export class DeleteClienteController{
  async handle(req: Request, res: Response){
    const { cpf } = req.params;
    try{
      const testeCliente = await prisma.cliente.findUnique({
        where: {
            cpf: cpf
        }
      })
      if(testeCliente == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Este cliente não existe"})
      }

      const deleteCliente = new DeletandoCliente();
      const deletadoCliente = await deleteCliente.execute(cpf);

      return res.status(StatusCodes.OK).send({
        deletadoCliente,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha ao buscar pelo cliente"});
    }
  }
}