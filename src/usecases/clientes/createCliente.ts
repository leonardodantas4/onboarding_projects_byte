import { PrismaClient, Cliente } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCliente{
    nome: string,
    cpf: string,
    celular: string,
    endereco: string
}

export class CriandoCliente{
    async execute({nome,cpf,celular,endereco}:typeCliente): Promise<Cliente>{
        const novoCliente = await prisma.cliente.create({
            data:{
                nome: nome,
                cpf: cpf,
                celular: celular,
                endereco: endereco
            }
        })
        return novoCliente;
    }
}
