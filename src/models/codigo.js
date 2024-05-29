
import mongoose from "mongoose";

const CodigoSchema = new mongoose.Schema(
  {
    cod: {      type: String  },
    usado: {      type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("codigo", CodigoSchema);
