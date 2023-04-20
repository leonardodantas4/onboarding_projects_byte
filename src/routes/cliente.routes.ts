import { Router } from "express";
import { CreateClienteController } from "../controller/clienteController/createCliente";

const clienteRoutes = Router();

const createCliente = new CreateClienteController();

clienteRoutes.post("/create", createCliente.handle);

export {clienteRoutes};