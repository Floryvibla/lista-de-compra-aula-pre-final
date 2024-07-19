import React, { useState } from "react";
import "./styles.css";
import ItemLoja from "./compontente/loja_itens";

export default function App() {
  const [listaCompra, setListaCompra] = useState([]);
  const [valueItem, setValueItem] = useState("");

  function addItem() {
    setListaCompra([...listaCompra, valueItem]);
    setValueItem("");
  }

  function deletarItem(index) {
    setListaCompra(listaCompra.filter((_, key) => key !== index));
  }

  function handleOnChange(evento) {
    setValueItem(evento.target.value);
  }

  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      <div className="input-container">
        <input
          onChange={handleOnChange}
          value={valueItem}
          type="text"
          placeholder="Adicionar item"
        />
        <button onClick={addItem}>Adicionar</button>
      </div>
      <ul className="shopping-list">
        {listaCompra.map((itemLista, index) => (
          <ItemLoja
            produto={itemLista}
            key={index}
            onClick={() => deletarItem(index)}
          />
        ))}
      </ul>
    </div>
  );
}
