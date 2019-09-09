import { Router } from "express";
import userController from "../controllers/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], userController.listAll);

router.get("/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], userController.getOneById);

router.post("/", [checkJwt, checkRole(["ADMIN"])], userController.newUser);

router.patch("/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], userController.editUser);

router.delete("/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], userController.deleteUser);

export default router;