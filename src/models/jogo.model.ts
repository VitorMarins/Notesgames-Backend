import { Schema, model, Document, Types } from "mongoose";

interface IJogo extends Document {
  nome: string;
  descricao: string;
  status: string;
  imagem: string;
  dataLancamento: Date;
  genero: string;
  plataforma: string[];
  desenvolvedor: string;
  publicador: string;
  usuario: Types.ObjectId;
}

const JogoSchema: Schema<IJogo> = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { type: String, required: true },
  imagem: { type: String },
  dataLancamento: { type: Date, required: true },
  genero: { type: String, required: true },
  plataforma: [{ type: String, required: true }],
  desenvolvedor: { type: String, required: true },
  publicador: { type: String, required: true },
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
});

const Jogo = model<IJogo>("Jogo", JogoSchema);

export { IJogo, Jogo };
