import { Router } from "express";
import authenticationRoutes from "../../domains/authentication/routes"
import userRoutes from "../../domains/user/routes"
import companyRoutes from '../../domains/company/routes'

const router = Router();

// Prefixo para todas as rotas
router.use("/auth", authenticationRoutes);
router.use("/users", userRoutes);
router.use('/company', companyRoutes)

export default router;
 
