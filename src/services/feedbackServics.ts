import prisma from "../config";
import { feedbackModel } from "../models/feedbackModel";

export class feedbackServices {
  async createFeedback(feedbackData: feedbackModel) {
    return await prisma.feedback.create({ data: feedbackData });
  }
}
