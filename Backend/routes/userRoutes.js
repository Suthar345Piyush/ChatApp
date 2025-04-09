import { Router } from "express";
import { signup, login, logout, getUserProfile } from "../controllers/userController.js";
import secureRoute from "../middleware/secureRoute.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout" , logout);
router.get("/getUserProfile" , getUserProfile , secureRoute);


export default router;



