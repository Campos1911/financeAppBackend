import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { analiseControllers } from "../controllers/analiseControllers";

export default async function analiseRoutes(app: FastifyInstance) {
  app.get("/teste", async (req: FastifyRequest, reply: FastifyReply) => {
    return new analiseControllers().generateAnalise(req, reply);
  });
}
