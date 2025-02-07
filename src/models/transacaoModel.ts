export interface TransacaoModel {
  valor: number;
  data: string;
  descricao?: string;
  categoria: string;
  usuarioId: number;
}
