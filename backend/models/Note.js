import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  content: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default model("Note", NoteSchema);
