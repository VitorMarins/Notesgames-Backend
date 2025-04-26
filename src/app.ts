import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/database";
import Routes from "./routes/routes";
import swaggerRoute from "./docs/swagger";

const corsOptions = {
  origin: "*", // Coloque a URL do seu frontend aqui
  optionsSuccessStatus: 200,
};

export default class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors(corsOptions));
    this.server.use(helmet());
    this.server.use(morgan("dev"));
  }

  private router() {
    new Routes(this.server);
    swaggerRoute(this.server);
  }
}

connectDB();
