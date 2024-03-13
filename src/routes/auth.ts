// Enrutador para el manejo de rutas de registro y inicio de sesion

import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

const router = Router();
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };