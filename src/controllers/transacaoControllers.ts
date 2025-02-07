import { FastifyReply, FastifyRequest } from "fastify";
import {
  editTransacaoValidator,
  transacaoValidator,
} from "../validators/transacaoValidator";
import { TransacaoModel } from "../models/transacaoModel";
import { transacaoServices } from "../services/transacaoServices";

export class transacaoControllers {
  async createTransacao(
    req: FastifyRequest<{ Body: TransacaoModel }>,
    reply: FastifyReply
  ) {
    const { error, value } = transacaoValidator.validate(req.body);
    const newTransacao = new transacaoServices();
    if (error) {
      return reply.status(500).send(error.details[0].message);
    }
    try {
      const transaction = await newTransacao.createTransacao(value);
      return reply.status(200).send(transaction);
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
  async getTransacoesByUser(
    req: FastifyRequest<{ Params: { usuarioId: string } }>,
    reply: FastifyReply
  ) {
    const getTransacoes = new transacaoServices();
    const { usuarioId } = req.params;
    try {
      const transacoes = await getTransacoes.getTransacoesByUser(
        parseInt(usuarioId)
      );
      return reply.status(200).send(transacoes);
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
  async getTransacoesById(
    req: FastifyRequest<{ Params: { transacaoId: string } }>,
    reply: FastifyReply
  ) {
    const getTransacoes = new transacaoServices();
    const { transacaoId } = req.params;
    try {
      const transacoes = await getTransacoes.getTransacaoById(
        parseInt(transacaoId)
      );
      return reply.status(200).send(transacoes);
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
  async editTransacao(
    req: FastifyRequest<{
      Body: TransacaoModel;
      Params: { transacaoId: string };
    }>,
    reply: FastifyReply
  ) {
    const editTransacao = new transacaoServices();
    const { transacaoId } = req.params;
    const { error, value } = editTransacaoValidator.validate(req.body);
    if (error) {
      return reply.status(500).send(error.details[0].message);
    }
    try {
      await editTransacao.editTransacao(parseInt(transacaoId), value);
      return reply.status(200).send({ message: "Transação editada" });
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
  async deleteTransacao(
    req: FastifyRequest<{ Params: { transacaoId: string } }>,
    reply: FastifyReply
  ) {
    const delTransacao = new transacaoServices();
    const { transacaoId } = req.params;
    try {
      await delTransacao.deleteTransacao(parseInt(transacaoId));
      return reply.status(200).send({ message: "Transação excluída" });
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
}
