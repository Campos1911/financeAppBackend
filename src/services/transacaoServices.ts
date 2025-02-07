import prisma from "../config";
import { TransacaoModel } from "../models/transacaoModel";

export class transacaoServices {
  async createTransacao(transacaoData: TransacaoModel) {
    return await prisma.transacao.create({ data: transacaoData });
  }
  async getTransacoesByUser(usuarioId: number) {
    return await prisma.transacao.findMany({ where: { usuarioId } });
  }
  async getTransacaoById(transacaoId: number) {
    return await prisma.transacao.findUnique({ where: { id: transacaoId } });
  }
  async editTransacao(transacaoId: number, transacaoData: TransacaoModel) {
    return await prisma.transacao.update({
      where: { id: transacaoId },
      data: transacaoData,
    });
  }
  async deleteTransacao(transacaoId: number) {
    return await prisma.transacao.delete({ where: { id: transacaoId } });
  }
}
