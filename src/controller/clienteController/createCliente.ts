import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoCliente } from "../../usecases/clientes/createCliente";

export const prisma = new PrismaClient;

export class CreateClienteController{
    async handle(req:Request, res: Response){
        const {nome,cpf,celular,endereco} = req.body;
        try{
            if(await prisma.cliente.findUnique({where:{cpf:cpf}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Cliente já existente"})
            }

            const create = new CriandoCliente();
            // Criando cliente
            const cliente = await create.execute({nome,cpf,celular,endereco});

            return res.send({
                cliente,
            },);
        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error:"Falha no Registro de cliente"});
        }
    };
}