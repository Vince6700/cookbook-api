import { IList } from "../types/interface";
import { Schema, model } from "mongoose";

const schema: Schema = new Schema<IList>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  doneItems: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

export default model("List", schema);
