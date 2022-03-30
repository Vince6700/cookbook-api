import { model, Schema } from "mongoose";
import { IUser } from "../types/interface";

const mongoose = require("mongoose");

const userSchema: Schema = new Schema<IUser>({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

export default model("User", userSchema);
