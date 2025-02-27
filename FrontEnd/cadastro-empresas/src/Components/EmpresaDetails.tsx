import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Styles/EmpresaDetails.css"

const EmpresaDetails = () => {
  const { Id } = useParams<{ Id: string }>(); // Captura o ID da URL como string
  const [empresa, setEmpresa] = useState<any>(null);
  const navigate = useNavigate();

  // Função para buscar a empresa específica
  useEffect(() => {
    if (!Id) {
      console.error("ID da empresa não encontrado.");
      return;
    }

    const fetchEmpresa = async () => {
      try {
        console.log("Buscando empresa com ID:", Id);
        const response = await axios.get(`http://localhost:5039/api/empresas/${Id}`);
        setEmpresa(response.data);
      } catch (error) {
        console.error('Erro ao buscar a empresa', error);
      }
    };

    fetchEmpresa();
  }, [Id]);

  // Função para deletar a empresa
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5039/api/empresas/${Id}`);
      navigate('/'); // Redireciona para a página inicial após a exclusão
    } catch (error) {
      console.error('Erro ao deletar a empresa', error);
    }
  };

  // Função para editar a empresa
  const handleEdit = () => {
    navigate(`/editar/${empresa.id}`);
  };

  // Exibe "Carregando..." enquanto a empresa não é carregada
  if (!empresa) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Detalhes da Empresa</h1>
      <p><strong>Razão Social:</strong> {empresa.razaoSocial}</p>
      <p><strong>CNPJ:</strong> {empresa.cnpj}</p>
      <p><strong>Data de Registro:</strong> {empresa.criadoEm}</p>
      <p><strong>Status:</strong> {empresa.status ? 'Ativo' : 'Inativo'}</p>


      <div className='buttonsContainer'>
        <button onClick={handleEdit} className='EditarButton'>Editar</button>
        <button onClick={handleDelete} className='DeletarButton'>Deletar</button>
      </div>
    </div>
  );
};

export default EmpresaDetails;
