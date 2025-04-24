import App from "./app";
import dotenv from "dotenv";
dotenv.config();
const PORT: number = Number(process.env.PORT || 3000);

new App().server
  .listen(PORT, "localhost", () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
