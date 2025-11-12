import { useMemo, useState} from "react";
import { CATEGORIAS } from "../data/mock";
import "../styles/FormLancamento.css";

const onlyDigits = (s) => (s || "").replace(/\D/g, "");
const maskBR = (s) => {
  let d = onlyDigits(s).slice(0, 8);
  const p1 = d.slice(0, 2);
  const p2 = d.slice(2, 4);
  const p3 = d.slice(4, 8);
  if (d.length <= 2) return p1;
  if (d.length <= 4) return `${p1}/${p2}`;
  return `${p1}/${p2}/${p3}`;
};

const brToISO = (s) => {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s || "");
  if (!m) return null;
  const [, dd, mm, yyyy] = m;

  const D = Number(dd);
  const M = Number(mm);
  const Y = Number(yyyy);

 
  if (M < 1 || M > 12 || D < 1 || D > 31) return null;
  if (Y < 1900 || Y > new Date().getFullYear() + 1) return null; 

 
  const diasNoMes = new Date(Y, M, 0).getDate();
  if (D > diasNoMes) return null;

  return `${Y}-${mm}-${dd}`;
};

export default function FormLancamento({ onAdd }) {
  const [tipo, setTipo] = useState("saida");
  const [dataBR, setDataBR] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");

  const categorias = useMemo(() => CATEGORIAS[tipo], [tipo]);

  function submit(e) {
    e.preventDefault();
    if (!dataBR || !descricao.trim() || !categoria || !valor) {
      alert("Por favor, preencha todos os campos antes de adicionar o lançamento.");
      return; 
    }

    const iso = brToISO(dataBR);
    if (!iso) {
      alert("Data inválida. Use o formato dd/mm/aaaa.");
      return;
    }

    onAdd({
        id: Date.now(),
        data: iso,
        descricao: descricao.trim(),
        categoria,
        valor: Number(valor),
        tipo,
    });

    setDataBR("");
    setDescricao("");
    setCategoria("");
    setValor("");
  }

  return (
    <form onSubmit={submit} className="form-lancamento">
        <input placeholder="dd/mm/aaaa"
        value={dataBR}
        onChange={(e) => setDataBR(maskBR(e.target.value))}
        inputMode="numeric"
        />
        <input 
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        />
        <select
        value={tipo}
        onChange={(e) => {
            setTipo(e.target.value);
            setCategoria("");        
        }}
        >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>            
        </select>
        <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Categoria</option>
        {categorias.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="number"
        step="0.01"
        min="0"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
