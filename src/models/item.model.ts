import { Schema, model } from "mongoose";
import { IItem } from "../types/interface";

const schema: Schema = new Schema<IItem>({
  name: { type: String, required: true, unique: true },
  scale: { type: String },
  quantity: { type: Number },
  lists: [{ type: Schema.Types.ObjectId, ref: "List" }],
});

export default model("Item", schema);
