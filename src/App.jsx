// src/App.jsx
import { useEffect, useState } from "react";
import { LANCAMENTOS_INICIAIS } from "./data/mock";
import FormLancamento from "./components/FormLancamento";
import ListaLancamentos from "./components/ListaLancamentos";
import Totais from "./components/Totais";
import "./styles/App.css";


export default function App() {
  const [lancamentos, setLancamentos] = useState(LANCAMENTOS_INICIAIS);

  function handleAdd(novo) {
    setLancamentos((prev) => [novo, ...prev]);
  }

  function handleRemove(id) {
    setLancamentos((prev) => prev.filter((l) => l.id !== id));
  }

  useEffect(() => {
    const entradas = lancamentos
      .filter((l) => l.tipo === "entrada")
      .reduce((s, l) => s + l.valor, 0);
    const saidas = lancamentos
      .filter((l) => l.tipo === "saida")
      .reduce((s, l) => s + l.valor, 0);
    const saldo = entradas - saidas;
    document.title = `Saldo: ${saldo.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`;
  }, [lancamentos]);



  return (
    <main className="app">
      <h1 className="app_title">Controle Financeiro</h1>

      <section className="section">
        <Totais lancamentos={lancamentos} />
      </section>

      <section className="section">
        <FormLancamento onAdd={handleAdd} />
      </section>

      <section>
        <ListaLancamentos lancamentos={lancamentos} onRemove={handleRemove} />      
      </section>

    </main>
  );
}
