import { FastifyReply, FastifyRequest } from "fastify";
import { modelGenerativa } from "../config/iaGenerativa";
import { userServices } from "../services/userServices";

export class analiseControllers {
  async generateAnalise(
    req: FastifyRequest<{ Params: { userId: string } }>,
    reply: FastifyReply
  ) {
    const ia = modelGenerativa;
    const findUser = new userServices();
    const { userId } = req.params;
    try {
      const response =
        await ia.generateContent(`"Crie um planejamento financeiro detalhado para [Nome do Cliente], que tem como objetivo [Objetivo do Cliente, por exemplo: 'economizar R$ 100.000 para a compra de uma casa nos próximos 5 anos' ou 'aposentadoria aos 60 anos com uma renda mensal de R$ 10.000']. O planejamento deve incluir:

1. **Análise da situação atual**:
   - Renda mensal: [Valor]
   - Despesas mensais: [Valor ou lista de despesas]
   - Dívidas existentes: [Valor e detalhes, se houver]
   - Investimentos atuais: [Valor e tipos de investimentos, se houver]
   - Reserva de emergência: [Valor, se houver]

2. **Estratégia para alcançar o objetivo**:
   - Sugestão de economia mensal necessária.
   - Recomendações de cortes de gastos ou otimização de despesas.
   - Sugestão de alocação de recursos em investimentos (ex: renda fixa, ações, fundos imobiliários, etc.).
   - Prazo estimado para atingir o objetivo.

3. **Acompanhamento e revisão**:
   - Sugestão de frequência para revisão do planejamento (ex: trimestral, semestral).
   - Indicadores de progresso (ex: metas intermediárias).

4. **Considerações adicionais**:
   - Inclua dicas para proteger o patrimônio (ex: seguros, diversificação de investimentos).
   - Aborde possíveis riscos e como mitigá-los.

O planejamento deve ser claro, realista e adaptado ao perfil de [Nome do Cliente], que tem um perfil de risco [conservador, moderado ou arrojado] e um horizonte de tempo de [X anos] para alcançar o objetivo."`);
      return reply.status(200).send(response);
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
}
