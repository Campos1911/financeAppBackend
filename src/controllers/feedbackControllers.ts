import { FastifyReply, FastifyRequest } from "fastify";
import { feedbackValidator } from "../validators/feedbackValidator";
import { feedbackModel } from "../models/feedbackModel";
import { feedbackServices } from "../services/feedbackServics";

export class feedbackControllers {
  async createFeedback(
    req: FastifyRequest<{ Body: feedbackModel }>,
    reply: FastifyReply
  ) {
    const { error, value } = feedbackValidator.validate(req.body);
    if (error) {
      return reply.status(500).send(error.details[0].message);
    }
    const feedbackService = new feedbackServices();
    try {
      const feedback = await feedbackService.createFeedback(value);
      return reply.status(200).send(feedback);
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
}
