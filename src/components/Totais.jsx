import { useMemo } from "react";

const fmt = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Totais({ lancamentos }) {
  const { entradas, saidas, saldo } = useMemo(() => {
    const e = lancamentos
      .filter((l) => l.tipo === "entrada")
      .reduce((s, l) => s + l.valor, 0);
    const s = lancamentos
      .filter((l) => l.tipo === "saida")
      .reduce((s, l) => s + l.valor, 0);
    return { entradas: e, saidas: s, saldo: e - s };
  }, [lancamentos]);

  return (
    <div className="totais">
      <div className="total-card">
        <span className="label">Entradas</span>
        <span className="value value--in">{fmt(entradas)}</span>
      </div>

      <div className="total-card">
        <span className="label">Saídas</span>
        <span className="value value--out">-{fmt(saidas)}</span>
      </div>

      <div className="total-card">
        <span className="label">Saldo</span>
        <span className="value value--bal">{fmt(saldo)}</span>
      </div>
    </div>
  );
}
