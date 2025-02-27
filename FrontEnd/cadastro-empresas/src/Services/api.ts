import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5039/api/Empresas',
});

export const ListarEmpresas = async () => {
    return await api.get('/');
}

export const VerificarEmpresaEspecifica = async (Id : number) => {
    return await api.get(`/${Id}`);
};

export const CriarEmpresa = async (empresa : any) => {
    return await api.post('/', empresa);
};

export const EditarEmpresa = async (Id : number, empresa : any) => {
    return await api.put(`/${Id}`, empresa);
};

export const DeletarEmpresa = async (Id: number) => {
    return await api.delete(`/${Id}`);
};