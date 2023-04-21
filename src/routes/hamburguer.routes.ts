import { Router } from "express";
import { CreateHamburguerController } from "../controller/hamburguerController/createHamburguer";
import { UpdateHamburguerController } from "../controller/hamburguerController/updateHamburguer"; 

const hamburguerRoutes = Router();

const createHamburguer = new CreateHamburguerController();
const updateHamburguerController = new UpdateHamburguerController();

hamburguerRoutes.post("/create", createHamburguer.handle);
hamburguerRoutes.put("/update", updateHamburguerController.handle);

export {hamburguerRoutes};