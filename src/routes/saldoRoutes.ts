import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { saldoControllers } from "../controllers/saldoControllers";

export default async function saldoRoutes(app: FastifyInstance) {
  app.get(
    "/get/saldo/:userId",
    async (
      req: FastifyRequest<{ Params: { userId: string } }>,
      reply: FastifyReply
    ) => {
      return new saldoControllers().getSaldoGeral(req, reply);
    }
  );
}
