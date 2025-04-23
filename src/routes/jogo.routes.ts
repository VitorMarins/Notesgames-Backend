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
     *     summary: Lista todos os jogos
     *     tags:
     *       - Jogos
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Lista de jogos
     */
    this.router.get("/", authMiddleware, this.controller.GetJogos);

    /**
     * @swagger
     * /jogos/{id}:
     *   get:
     *     summary: Busca um jogo pelo ID
     *     tags:
     *       - Jogos
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID do jogo
     *     responses:
     *       200:
     *         description: Jogo encontrado
     *       404:
     *         description: Jogo não encontrado
     */
    this.router.get("/:id", authMiddleware, this.controller.GetJogoByID);

    /**
     * @swagger
     * /jogos/usuario/{id}:
     *   get:
     *     summary: Lista jogos de um usuário
     *     tags:
     *       - Jogos
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID do usuário
     *     responses:
     *       200:
     *         description: Lista de jogos
     *       404:
     *         description: Nenhum jogo encontrado
     */
    this.router.get(
      "/usuario/:id",
      authMiddleware,
      this.controller.GetJogosbyUsuarios,
    );

    /**
     * @swagger
     * /jogos:
     *   post:
     *     summary: Cria um novo jogo
     *     tags:
     *       - Jogos
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - nome
     *               - usuario
     *             properties:
     *               nome:
     *                 type: string
     *               descricao:
     *                 type: string
     *               status:
     *                 type: string
     *               dataLancamento:
     *                 type: string
     *                 format: date
     *               genero:
     *                 type: string
     *               plataforma:
     *                 type: string
     *               desenvolvedor:
     *                 type: string
     *               publicador:
     *                 type: string
     *               usuario:
     *                 type: string
     *     responses:
     *       201:
     *         description: Jogo criado com sucesso
     */
    this.router.post("/", authMiddleware, this.controller.CreateJogo);

    /**
     * @swagger
     * /jogos/{id}:
     *   put:
     *     summary: Atualiza um jogo existente
     *     tags:
     *       - Jogos
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID do jogo
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nome:
     *                 type: string
     *               descricao:
     *                 type: string
     *               status:
     *                 type: string
     *               dataLancamento:
     *                 type: string
     *                 format: date
     *               genero:
     *                 type: string
     *               plataforma:
     *                 type: string
     *               desenvolvedor:
     *                 type: string
     *               publicador:
     *                 type: string
     *               usuario:
     *                 type: string
     *     responses:
     *       200:
     *         description: Jogo atualizado com sucesso
     */
    this.router.put("/:id", authMiddleware, this.controller.UpdateJogo);

    /**
     * @swagger
     * /jogos/{id}:
     *   delete:
     *     summary: Deleta um jogo pelo ID
     *     tags:
     *       - Jogos
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *         description: ID do jogo
     *     responses:
     *       204:
     *         description: Jogo deletado com sucesso
     */
    this.router.delete("/:id", authMiddleware, this.controller.DeleteJogo);
  }
}

export default new JogoRoutes().router;
