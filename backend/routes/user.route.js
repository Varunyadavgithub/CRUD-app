import express, { application } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.contoller.js";

const router = express.Router();

router.post("/createuser", createUser);
router.get("/getuser/:id", getUser);
router.get("/getallusers", getAllUsers);
router.put("/update/:userId", updateUser);
router.delete("/delete/:userId",deleteUser);

export default router;
