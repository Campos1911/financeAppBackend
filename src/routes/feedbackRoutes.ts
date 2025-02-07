import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { feedbackControllers } from "../controllers/feedbackControllers";
import { feedbackModel } from "../models/feedbackModel";

export default async function feedbackRoutes(app: FastifyInstance) {
  app.post(
    "/create/feedback",
    async (
      req: FastifyRequest<{ Body: feedbackModel }>,
      reply: FastifyReply
    ) => {
      return new feedbackControllers().createFeedback(req, reply);
    }
  );
}
