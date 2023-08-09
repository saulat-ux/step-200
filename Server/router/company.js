import express from "express";
import { verifyCompanyToken } from "../middlewares/middleware.js";

import {
  registerCompany,
  loginCompany,
  setProfile,
  getProfile,
} from "../controllers/company.js";

const router = express.Router();

router.post("/register", registerCompany);
router.post("/login", loginCompany);
router.post("/setProfile", verifyCompanyToken, setProfile);
router.get("/getProfile", verifyCompanyToken, getProfile);

export default router;
