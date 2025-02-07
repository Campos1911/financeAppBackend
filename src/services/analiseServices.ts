import prisma from "../config";

export class analiseService {
  async generateAnalise(usuarioId: number) {
    return await prisma.usuario.findUnique({ where: { id: usuarioId } });
  }
}
