import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { TransacaoModel } from "../models/transacaoModel";
import { transacaoControllers } from "../controllers/transacaoControllers";

export default async function transacaoRoutes(app: FastifyInstance) {
  app.post(
    "/create/transacao",
    async (
      req: FastifyRequest<{ Body: TransacaoModel }>,
      reply: FastifyReply
    ) => {
      return new transacaoControllers().createTransacao(req, reply);
    }
  );
  app.get(
    "/get/transacao/:usuarioId",
    async (
      req: FastifyRequest<{ Params: { usuarioId: string } }>,
      reply: FastifyReply
    ) => {
      return new transacaoControllers().getTransacoesByUser(req, reply);
    }
  );
  app.get(
    "/get/transacao/find/:transacaoId",
    async (
      req: FastifyRequest<{ Params: { transacaoId: string } }>,
      reply: FastifyReply
    ) => {
      return new transacaoControllers().getTransacoesById(req, reply);
    }
  );
  app.delete(
    "/delete/transacao/:transacaoId",
    async (
      req: FastifyRequest<{ Params: { transacaoId: string } }>,
      reply: FastifyReply
    ) => {
      return new transacaoControllers().deleteTransacao(req, reply);
    }
  );
  app.patch(
    "/edit/transacao/:transacaoId",
    async (
      req: FastifyRequest<{
        Body: TransacaoModel;
        Params: { transacaoId: string };
      }>,
      reply: FastifyReply
    ) => {
      return new transacaoControllers().editTransacao(req, reply);
    }
  );
}
