import { FastifyReply, FastifyRequest } from "fastify";
import { loginValidator, registerValidator } from "../validators/userValidator";
import { signToken } from "../utils/jwtUtils";
import bcrypt from "bcryptjs";
import { userServices } from "../services/userServices";

export class userControllers {
  async register(req: FastifyRequest, reply: FastifyReply) {
    const { error, value } = registerValidator.validate(req.body);
    const registerService = new userServices();
    if (error) {
      return reply.status(500).send(error.details[0].message);
    }

    try {
      const user = await registerService.register(value);
      return reply.status(201).send(user);
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
  async login(req: FastifyRequest, reply: FastifyReply) {
    const { error, value } = loginValidator.validate(req.body);
    const findUser = new userServices();

    if (error) {
      return reply.status(400).send({ error: error.details[0].message });
    }

    const { email, senha } = value;
    const user = await findUser.login(email);

    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      return reply.status(401).send({ error: "Invalid credentials" });
    }

    const token = signToken({ id: user.id });
    reply.send({ token });
  }
}
