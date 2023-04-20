import { Router } from "express";
import { CreateClienteController } from "../controller/clienteController/createCliente";
import { UpdateClienteController } from "../controller/clienteController/updateCliente"; 
import { DeleteClienteController } from "../controller/clienteController/deleteCliente";

const clienteRoutes = Router();

const createCliente = new CreateClienteController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

clienteRoutes.post("/create", createCliente.handle);
clienteRoutes.put("/update", updateClienteController.handle);
clienteRoutes.delete("/delete", deleteClienteController.handle);

export {clienteRoutes};