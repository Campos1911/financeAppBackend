import { FastifyReply, FastifyRequest } from "fastify";
import { verifyToken } from "../utils/jwtUtils";

export const authMiddleware = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token || !verifyToken(token)) {
    reply.status(401).send({ error: "Unauthorized" });
  }
};
