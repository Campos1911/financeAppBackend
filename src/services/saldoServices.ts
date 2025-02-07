import prisma from "../config";

export class saldoServices {
  async getSaldoGeral(userId: number) {
    return await prisma.transacao.findMany({ where: { usuarioId: userId } });
  }
}
