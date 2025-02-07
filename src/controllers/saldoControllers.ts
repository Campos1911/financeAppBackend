import { FastifyReply, FastifyRequest } from "fastify";
import { saldoServices } from "../services/saldoServices";

export class saldoControllers {
  async getSaldoGeral(
    req: FastifyRequest<{ Params: { userId: string } }>,
    reply: FastifyReply
  ) {
    const getSaldo = new saldoServices();
    try {
      let valor = 0;
      const { userId } = req.params;
      const trasacoes = await getSaldo.getSaldoGeral(parseInt(userId));
      trasacoes.map((transacao) => (valor += transacao.valor));
      return reply.status(200).send({ data: valor });
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
}
