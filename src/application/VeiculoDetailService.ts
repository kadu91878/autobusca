import Axios from "@/plugins/Axios"; // Importe o Axios configurado para sua aplicação

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // URL base da API

export default class VeiculoDetailService {
    static async listarDetalhesPaginado() {
        try {
            const response = await Axios.get(`${API_BASE_URL}/veiculo-detail-paginado`);
            return response.data;
        } catch (error) {
            console.error("Erro ao listar imagens:", error);
            throw error;
        }
    }

    static async listarDetalhes() {
        try {
            const response = await Axios.get(`${API_BASE_URL}/veiculo-detail`);
            return response.data;
        } catch (error) {
            console.error("Erro ao listar imagens:", error);
            throw error;
        }
    }

    static async listarDetalhesById(id: string) {
        try {
            const response = await Axios.get(`${API_BASE_URL}/veiculo-detail/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao listar imagens:", error);
            throw error;
        }
    }
}

