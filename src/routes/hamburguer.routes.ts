import { Router } from "express";
import { CreateHamburguerController } from "../controller/hamburguerController/createHamburguer";
import { UpdateHamburguerController } from "../controller/hamburguerController/updateHamburguer";
import { DeleteHamburguerController } from "../controller/hamburguerController/deleteHamburguer";

const hamburguerRoutes = Router();

const createHamburguer = new CreateHamburguerController();
const updateHamburguerController = new UpdateHamburguerController();
const deleteHamburguerController = new DeleteHamburguerController();

hamburguerRoutes.post("/create", createHamburguer.handle);
hamburguerRoutes.put("/update/:nome", updateHamburguerController.handle);
hamburguerRoutes.delete("/delete/:nome", deleteHamburguerController.handle);

export {hamburguerRoutes};