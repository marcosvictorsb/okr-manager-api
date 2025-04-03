import { Router } from "express";
import authenticationRoutes from "../../domains/authentication/routes"
import userRoutes from "../../domains/user/routes"
import companyRoutes from '../../domains/company/routes'
import teamRoutes from '../../domains/team/routes'
import objectiveRoutes from "../../domains/objective/routes"
import resultKeyRoutes from "../../domains/result-key/routes"

const router = Router();

// Prefixo para todas as rotas
router.use("/auth", authenticationRoutes);
router.use("/users", userRoutes);
router.use('/company', companyRoutes)
router.use("/teams", teamRoutes);
router.use("/objectives", objectiveRoutes);
router.use("/resultkeys", resultKeyRoutes);

export default router;
 
