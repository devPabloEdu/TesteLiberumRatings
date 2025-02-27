import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Home.css";
import { Link } from "react-router-dom";


const EmpresaList = () => {
  const [empresas, setEmpresas] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5039/api/Empresas")
      .then(response => setEmpresas(response.data))
      .catch(error => console.error("Erro ao buscar empresas", error));
  }, []);

  return (
    <div>
        <div className="InfosHome">
            <h1>Bem vindo Usuário!</h1>
            <p>Atualmente, essa é a nossa lista atualizada de empresas</p>
        </div>
        <div className="TabelasEmpresas">
          <table>
            <thead>
              <tr>
                <th>CNPJ</th>
                <th>RAZÃO SOCIAL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {empresas.map(empresa => (
                <tr key={empresa.id}>
                  <td>{empresa.cnpj}</td>
                  <td>{empresa.razaoSocial}</td>
                  <td>{empresa.status ? "Ativo" : "Inativo"}</td>
                <td>
                    <Link to={`/empresa/${empresa.Id}`}>Ver detalhes</Link>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default EmpresaList;
