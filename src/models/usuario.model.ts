import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IUsuario extends Document {
  nome: string;
  email: string;
  senha: string;
  icon: string;
  compareSenha(senha: string): Promise<boolean>;
}

const UsuarioSchema: Schema<IUsuario> = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    icon: { type: String, default: "https://example.com/default-icon.png" },
  },
  { timestamps: true },
);

UsuarioSchema.pre<IUsuario>("save", async function (next) {
  if (this.isModified("senha")) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
  }
  next();
});

UsuarioSchema.methods.compareSenha = function (senha: string) {
  return bcrypt.compare(senha, this.senha);
};

const Usuario = model<IUsuario>("Usuario", UsuarioSchema);

export { IUsuario, Usuario };
