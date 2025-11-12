# Controle Financeiro

## Descrição

Aplicação web desenvolvida com **React** e **Vite** para controle de finanças pessoais.Permite registrar e acompanhar transações financeiras (entradas e saídas), visualizar a lista completa de lançamentos e calcular automaticamente o saldo disponível.

* * *

## Funcionalidades

* **Adicionar lançamentos:** formulário para registrar uma transação contendo data, descrição, tipo (entrada ou saída), categoria e valor.As datas são digitadas no formato `dd/mm/aaaa` e convertidas automaticamente para o padrão ISO.Campos vazios ou datas inválidas são bloqueados com alertas.
  
* **Lista de lançamentos:** exibe todas as transações registradas em uma tabela, mostrando Data, Descrição, Categoria, Tipo, Valor e Ação.Cada linha possui um botão para remover o lançamento.
  
* **Categorias predefinidas:**
  
  * *Receitas:* Salário, Vendas, Investimentos, Reembolso, Outros
  * *Despesas:* Alimentação, Transporte, Moradia, Lazer, Educação, Saúde, Compras, Assinaturas
* **Totalizadores:** três cards exibem o total de entradas, saídas e o saldo atual, atualizados automaticamente conforme os lançamentos são adicionados ou removidos.
  
* **Remoção de lançamentos:** ao excluir um item, os totais e o saldo são recalculados instantaneamente.
  
* **Layout responsivo:** interface adaptável para diferentes tamanhos de tela, com tema escuro definido por variáveis CSS.
  

* * *

## Estrutura do Projeto

    src/
     ┣ components/
     ┃ ┣ FormLancamento.jsx       # Formulário para adicionar transações
     ┃ ┣ ListaLancamentos.jsx     # Tabela de listagem e remoção de lançamentos
     ┃ ┗ Totais.jsx               # Cards com totais de entradas, saídas e saldo
     ┣ data/
     ┃ ┗ mock.js                  # Categorias e lançamentos iniciais
     ┣ styles/
     ┃ ┣ App.css
     ┃ ┣ FormLancamento.css
     ┃ ┗ ListaLancamentos.css
     ┣ App.jsx                    # Componente principal e controle de estado
     ┣ main.jsx                   # Ponto de entrada do React
     ┗ index.css                  # Estilos globais

* * *

## Tecnologias Utilizadas

* **React + Vite** para desenvolvimento rápido e modular.
* **Hooks** (`useState`, `useMemo`) para gerenciamento de estado e cálculo de somatórios.
* **CSS modularizado** com variáveis globais para tema escuro.
* **Formatação local** de valores monetários em Real (BRL) com `Intl.NumberFormat`.
* **Armazenamento em memória:** sem necessidade de backend ou banco de dados.

* * *

## Como Executar o Projeto

1. Clone o repositório:
  
      git clone https://github.com/SEU_USUARIO/Controle-Financeiro.git
      cd Controle-Financeiro
  
2. Instale as dependências:
  
      npm install
  
3. Inicie o servidor de desenvolvimento:
  
      npm run dev
  
4. Acesse no navegador:
  
      http://localhost:5173/
  
5. (Opcional) Gere a build de produção:
  
      npm run build
  

* * *

## 🌐 Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/e908d164-cda8-4ded-b3d1-967d73074576/deploy-status)](https://app.netlify.com/sites/enchanting-frangollo-a5ac19/deploys)

👉 [Acesse o site publicado](https://enchanting-frangollo-a5ac19.netlify.app/)



---



