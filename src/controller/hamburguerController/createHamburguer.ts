import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoHamburguer } from "../../usecases/hamburgueres/createHamburguer";

export const prisma = new PrismaClient;

export class CreateHamburguerController{
    async handle(req:Request, res: Response){
        const {nome,descricao,preco,ingredientes} = req.body;
        try{
            if(await prisma.hamburguer.findUnique({where:{id:nome}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Hamburguer já existente"})
            }

            const create = new CriandoHamburguer();
            // Criando hamburguer
            const hamburguer = await create.execute({nome,descricao,preco,ingredientes});

            return res.send({
                hamburguer,
            },);
        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error:"Falha no registro do novo hamburguer"});
        }
    };
}