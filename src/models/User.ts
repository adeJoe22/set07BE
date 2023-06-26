import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  age: number;
  email: string;
  gender: string;
  hobbies?: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    age: { type: Number, required: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    gender: { type: String, required: true },
    hobbies: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<IUser>("User", userSchema);
export default UserModel;
