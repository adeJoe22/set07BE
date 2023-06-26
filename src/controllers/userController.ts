import UserModel from "../models/User";
import { Request, Response } from "express";
import { IUser } from "../models/User";

export const createStudent = async (
  req: Request<{}, {}, IUser>,
  res: Response
) => {
  try {
    const { name, age, gender, email, hobbies } = req.body;
    const newStudent = await UserModel.create({
      name,
      age,
      gender,
      email,
      hobbies,
    });
    return res
      .status(201)
      .json({ message: "Student added successfully", data: newStudent });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getStudents = async (req: Request, res: Response) => {
  try {
    const student = await UserModel.find();
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getStudent = async (req: Request, res: Response) => {
  try {
    const student = await UserModel.findById(req.params.studentID);
    if (!student) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const student = await UserModel.findByIdAndUpdate(
      req.params.studentID,
      {
        name,
        age,
      },
      { new: true }
    );
    if (!student) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const student = await UserModel.findByIdAndDelete(req.params.studentID);
    if (!student) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json(error);
  }
};
