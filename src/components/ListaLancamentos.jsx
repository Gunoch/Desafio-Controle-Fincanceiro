import "../styles/ListaLancamentos.css";

const isoToBR = (iso) => {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
};

const fmt = n => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ListaLancamentos({ lancamentos, onRemove }) {
  return (
    <table className="lista">
      <thead>
        <tr>
          <th>Data</th>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Tipo</th>
          <th>Valor</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {lancamentos.length === 0 && (
          <tr>
            <td className="vazio" colSpan="6">Sem lançamentos.</td>
          </tr>
        )}
        {lancamentos.map((l) => (
          <tr key={l.id}>
            <td>{isoToBR(l.data)}</td>
            <td>{l.descricao}</td>
            <td>{l.categoria}</td>
            <td>{l.tipo === "entrada" ? "Entrada" : "Saída"}</td>
            <td className={l.tipo === "entrada" ? "valor entrada" : "valor saida"}>
              {l.tipo === "saida" ? "-" : ""}
              {fmt(l.valor)}
            </td>
            <td>
              <button onClick={() => onRemove(l.id)}>Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
