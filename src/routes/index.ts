import { Router } from "express";
import { Request, Response } from "express";
import { clienteRoutes } from "./cliente.routes";
import { hamburguerRoutes } from "./hamburguer.routes";

const routes = Router();

routes.get("/",(req:Request, res:Response) => {
    return res.status(200).send({success:"Server ON and Connect!"});
});

// Criando rota de Clientes
routes.use("/cliente", clienteRoutes);

// Criando rota de Hamburgueres
routes.use("/hamburguer", hamburguerRoutes);

export { routes };