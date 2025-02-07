import prisma from "../config";
import { User } from "../models/userModel";
import bcrypt from "bcryptjs";

export class userServices {
  async register(userData: User) {
    const hashedPassword = await bcrypt.hash(userData.senha, 10);
    const user = await prisma.usuario.create({
      data: { ...userData, senha: hashedPassword },
    });
    return user;
  }
  async login(email: string) {
    return await prisma.usuario.findUnique({ where: { email } });
  }
}
