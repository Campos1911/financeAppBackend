import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { userControllers } from "../controllers/userControllers";

export default async function userRoutes(app: FastifyInstance) {
  app.post("/login/user", async (req: FastifyRequest, reply: FastifyReply) => {
    return new userControllers().login(req, reply);
  });
  app.post(
    "/register/user",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return new userControllers().register(req, reply);
    }
  );
}
