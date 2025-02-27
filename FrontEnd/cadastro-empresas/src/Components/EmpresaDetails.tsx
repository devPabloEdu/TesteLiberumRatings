import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmpresaDetails = () => {
  const { Id } = useParams();
  const [empresa, setEmpresa] = useState<any>(null);


  useEffect(() => {
    axios.get(`http://localhost:5039/api/Empresas/${Id}`)
      .then(response => setEmpresa(response.data))
      .catch(error => console.error("Erro ao buscar empresa", error));
  }, [Id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5039/api/Empresas/${Id}`);
    } catch (error) {
      console.error("Erro ao deletar empresa", error);
    }
  };

  if (!empresa) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Detalhes da Empresa</h1>
      <p>CNPJ: {empresa.cnpj}</p>
      <p>Razão Social: {empresa.razaoSocial}</p>
      <p>Status: {empresa.status ? "Ativo" : "Inativo"}</p>
      <button onClick={() => (`/editar/${empresa.Id}`)}>Editar</button>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default EmpresaDetails;
