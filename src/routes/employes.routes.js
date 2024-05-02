import express from "express";
import { getemployes,deleteemployes,postemployes,putemployes,getwithidEmpoyes } from "../controllers/employees.controllers.js";

const router = express.Router()

router.get('/employees/:user',getwithidEmpoyes)
router.get('/employees',getemployes)
router.post('/employees',postemployes)
router.patch('/employees/:user',putemployes)
router.delete('/employees/:user',deleteemployes)



export default router;