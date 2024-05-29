import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, unique: true, trim: true },
    cedula: {type: Number },
    apellido: { type: String, trim: true },
    drogueria: { type: String, trim: true },
    ciudad:   { type: String, trim: true },
    celular:  { type: Number,  trim: true },
    tipo_usuario:{ type: String, trim: true },
    password: { type: String, required: true },
    puntos: {type: Number },
    posicion: {type: Number },
    codigo1:  { type: String, trim: true },
    codigo2:  { type: String, trim: true },
    codigo3:  { type: String, trim: true },
    codigo4:  { type: String, trim: true },
  },
  { 
    timestamps: true,
    versionKey: false,
  }
);
/*
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
*/
export default mongoose.model("User", UserSchema);
