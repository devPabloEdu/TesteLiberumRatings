import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Definindo o tipo para Empresa
interface EmpresaModel {
  id: number;
  razaoSocial: string;
  cnpj: string;
  status: boolean;
  criadoEm: string;
  atualizadoEm: string;
}

const EmpresaEdit = () => {
  const { Id } = useParams<{ Id: string }>(); // Captura o ID da URL como string
  const [empresa, setEmpresa] = useState<EmpresaModel | null>(null);
  const navigate = useNavigate();

  // Função para carregar a empresa para edição
  useEffect(() => {
    if (!Id) {
      console.error("ID da empresa não encontrado.");
      return;
    }

    const fetchEmpresa = async () => {
      try {
        const response = await axios.get(`http://localhost:5039/api/empresas/${Id}`);
        setEmpresa(response.data);
      } catch (error) {
        console.error('Erro ao buscar a empresa', error);
      }
    };

    fetchEmpresa();
  }, [Id]);

  // Função para salvar a edição
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!empresa) {
      console.error("Dados da empresa não carregados.");
      return;
    }

    try {
      // Atualizando a empresa no backend
      await axios.put(`http://localhost:5039/api/empresas/${empresa.id}`, empresa);
      
      // Redireciona para a página de detalhes da empresa após salvar
      navigate(`/empresa/${empresa.id}`);
    } catch (error) {
      console.error('Erro ao editar a empresa', error);
    }
  };

  // Atualiza o estado quando os campos forem alterados
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEmpresa((prevEmpresa: EmpresaModel | null) => ({
      ...prevEmpresa!,
      [name]: value,
    }));
  };

  // Atualiza o status quando o checkbox for alterado
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmpresa((prevEmpresa: EmpresaModel | null) => ({
      ...prevEmpresa!,
      status: e.target.checked,
    }));
  };

  return (
    <div>
      <h1>Editar Empresa</h1>
      <p>Ao editar uma empresa você deve alterar a razão social e seu CNPJ de forma conjunta</p>
      <p>Pois o sistema não permite que seja salvo mais de uma vez a mesma razão social e o mesmo CNPJ</p>
      <p>Se apenas um dos dados está incorreto, a melhor solução neste caso seria realizar a exclusão da empresa e criar ela novamente</p>
      {empresa && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Razão Social:</label>
            <input
              type="text"
              name="razaoSocial"
              value={empresa.razaoSocial}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CNPJ:</label>
            <input
              type="text"
              name="cnpj"
              value={empresa.cnpj}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Status:</label>
            <input
              type="checkbox"
              name="status"
              checked={empresa.status}
              onChange={handleStatusChange}
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      )}
    </div>
  );
};

export default EmpresaEdit;
