/**
 * @typedef {Object} Lancamento
 * @property {number} id
 * @property {string} data      // ISO: YYYY-MM-DD
 * @property {string} descricao
 * @property {string} categoria
 * @property {number} valor
 * @property {"entrada"|"saida"} tipo
 */


export const CATEGORIAS = {
  entrada: ["Salário", "Vendas", "Investimentos", "Reembolso", "Outros"],
  saida:   ["Alimentação", "Transporte", "Moradia", "Lazer", "Educação", "Saúde", "Compras", "Assinaturas"]
};


export const LANCAMENTOS_INICIAIS =
/** @type {Lancamento[]} */ ([
  { id: 1, data: "2025-11-01", descricao: "Salário",                 categoria: "Salário",      valor: 4500.00, tipo: "entrada" },
  { id: 2, data: "2025-11-02", descricao: "Mercado (semana)",        categoria: "Alimentação",  valor: 320.40,  tipo: "saida"   },
  { id: 3, data: "2025-11-03", descricao: "Transporte (apps)",       categoria: "Transporte",   valor: 65.00,   tipo: "saida"   },
  { id: 4, data: "2025-11-05", descricao: "Venda de notebook usado", categoria: "Vendas",       valor: 1500.00, tipo: "entrada" },
  { id: 5, data: "2025-11-06", descricao: "Spotify",                 categoria: "Assinaturas",  valor: 19.90,   tipo: "saida"   },
  { id: 6, data: "2025-11-07", descricao: "Farmácia",                categoria: "Saúde",        valor: 48.70,   tipo: "saida"   }
]);


export function criarLancamento({ data, descricao, categoria, valor, tipo }) {
  return {
    id: Date.now(),
    data, 
    descricao: String(descricao || "").trim(),
    categoria,
    valor: Number(valor),
    tipo
  };
}
