import { Application } from "express";
import AuthRoutes from "./auth.routes";
import UsuarioRoutes from "./usuario.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/usuario", UsuarioRoutes);
    app.use("/auth", AuthRoutes);
  }
}
