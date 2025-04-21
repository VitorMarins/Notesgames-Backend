import { Router } from "express";
import JogoController from "../controllers/jogo.controller";
import authMiddleware from "../middleware/auth.middleware";

class JogoRoutes {
  router = Router();
  controller = new JogoController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    /**
 * @swagger
 * /jogos:
 *   get:
 *     summary: Retorna todos os jogos cadastrados
 *     tags: [Jogos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de jogos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jogo'
 *       500:
 *         description: Erro interno no servidor
 */

    this.router.get("/", authMiddleware, this.controller.GetJogos);

    // Retorna uma tarefa específica pelo seu id.
    this.router.get("/:id", authMiddleware, this.controller.GetJogoByID);

    // Retorna as tarefas de um usuário específico pelo seu id.
    this.router.get(
      "/usuario/:id",
      authMiddleware,
      this.controller.GetJogosbyUsuarios,
    );

    // Criar uma nova tarefa.
    this.router.post("/", authMiddleware, this.controller.CreateJogo);

    // Atualizar uma tarefa pelo seu id.
    this.router.put("/:id", authMiddleware, this.controller.UpdateJogo);

    // Deletar uma tarefa pelo seu id.
    this.router.delete("/:id", authMiddleware, this.controller.DeleteJogo);
  }
}

export default new JogoRoutes().router;
