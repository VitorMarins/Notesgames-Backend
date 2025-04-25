import { Jogo } from "./../models/jogo.model";
import { Request, Response } from "express";

export default class JogoController {
  async GetJogos(req: Request, res: Response) {
    try {
      const jogos = await Jogo.find();
      res.status(200).json(jogos);
    } catch (error) {
      console.error(error);
    }
  }

  async GetJogoByID(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const jogo = await Jogo.findById(id);
      res.status(200).json(jogo);
    } catch (error) {
      console.error(error);
    }
  }

  async GetJogosbyUsuarios(req: Request, res: Response): Promise<any> {
    try {
      const jogos = await Jogo.find({ usuario: req.params.id }).populate("usuario");
      if (!jogos) {
        return res.status(404).json({ message: "Nenhum jogo encontrado." });
      }
      res.status(200).json(jogos);
    } catch (error) {
      console.error(error);
    }
  }

  async CreateJogo(req: Request, res: Response): Promise<any> {
    try {
      const {
        nome,
        descricao,
        status,
        imagem,
        dataLancamento,
        genero,
        plataforma,
        desenvolvedor,
        publicador,
        usuario,
      } = req.body;
      const jogo = new Jogo({
        nome,
        descricao,
        status,
        imagem,
        dataLancamento,
        genero,
        plataforma,
        desenvolvedor,
        publicador,
        usuario,
      });
      await jogo.save();
      res.status(201).json(jogo);
    } catch (error) {
      console.error(error);
    }
  }

  async UpdateJogo(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const {
        nome,
        descricao,
        status,
        imagem,
        dataLancamento,
        genero,
        plataforma,
        desenvolvedor,
        publicador,
        usuario,
      } = req.body;
      const jogo = await Jogo.findByIdAndUpdate(
        id,
        {
          nome,
          descricao,
          status,
          imagem,
          dataLancamento,
          genero,
          plataforma,
          desenvolvedor,
          publicador,
          usuario,
        },
        { new: true },
      );
      res.status(200).json(jogo);
    } catch (error) {
      console.error(error);
    }
  }

  async DeleteJogo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Jogo.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
    }
  }
}
