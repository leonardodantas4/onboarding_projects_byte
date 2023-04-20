import { Router } from "express";
import { CreateHamburguerController } from "../controller/hamburguerController/createHamburguer";

const hamburguerRoutes = Router();

const createHamburguer = new CreateHamburguerController();

hamburguerRoutes.post("/create", createHamburguer.handle);

export {hamburguerRoutes};