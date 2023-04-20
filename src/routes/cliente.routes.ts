import { Router } from "express";
import { CreateClienteController } from "../controller/clienteController/createCliente";
import { UpdateClienteController } from "../controller/clienteController/updateCliente"; 

const clienteRoutes = Router();

const createCliente = new CreateClienteController();
const updateClienteController = new UpdateClienteController();

clienteRoutes.post("/create", createCliente.handle);
clienteRoutes.put("/update", updateClienteController.handle);

export {clienteRoutes};