import Axios from "@/plugins/Axios"; // Importe o Axios configurado para sua aplicação

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // URL base da API

export default class ImageService {
  static async listarPlacas() {
    try {
      const response = await Axios.get(`${API_BASE_URL}/listar-placas`);
      return response.data;
    } catch (error) {
      console.error("Erro ao listar imagens:", error);
      throw error;
    }
  }

  static async carregarImagens() {
    try {
      const response = await Axios.get(`${API_BASE_URL}/carregar-imagens/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao carregar imagens:", error);
      throw error;
    }
  }
}
