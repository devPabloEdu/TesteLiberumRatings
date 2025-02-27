import React, { useState } from "react";
import axios from "axios";
import "../Styles/EmpresaForm.css"

const CadastroEmpresa = () => {
  const [empresa, setEmpresa] = useState({
    razaoSocial: "",
    cnpj: "",
    status: true,
    dataRegistro: "",
  });
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmpresa({
      ...empresa,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:5039/api/Empresas", empresa)
      .then(() => {
      })
      .catch((error) => {
        console.error("Erro ao cadastrar empresa", error);
      });
  };

  return (
    <div>
      <h1>CADASTRAR EMPRESA</h1>
      <p>Insira o campo CNPJ sem utilizar caracteres especiais !</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Razão Social:</span>
          <input
            type="text"
            name="razaoSocial"
            value={empresa.razaoSocial}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>CNPJ:</span>
          <input
            type="text"
            name="cnpj"
            value={empresa.cnpj}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Data de Registro:</span>
          <input
            type="date"
            name="dataRegistro"
            value={empresa.dataRegistro}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>A empresa está ativa ?</span>
          <input
          type="checkbox"
          checked={empresa.status}
          onChange={(e) => setEmpresa({ ...empresa, status: e.target.checked })}
        />
        </label>
        <button type="submit">CADASTRAR</button>
      </form>
    </div>
  );
};

export default CadastroEmpresa;
