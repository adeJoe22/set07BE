import { Router, Response, Request } from "express";
import {
  createStudent,
  deleteStudent,
  getStudent,
  getStudents,
  updateStudent,
} from "../controllers/userController";
const router = Router();

router.route("/home").get((req: Request, res: Response) => {
  return res.status(200).json({ message: `Welcome Home ✈🚀🚀🌍` });
});

router.post("/create", createStudent);
router.get("/getAll", getStudents);
router.get("/getOne/:studentID", getStudent);
router.patch("/update-profile/:studentID", updateStudent);
router.delete("/delete/:studentID", deleteStudent);

export default router;
