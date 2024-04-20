export interface VeiculoComLocalizacao {
    placa_carro: string;
    nome_veiculo?: string | null;
    modelo?: string | null;
    preco?: number | null;
    quilometragem?: number | null;
    tipo_cambio?: string | null;
    ano_modelo?: number | null;
    cor?: string | null;
    tipo_combustivel?: string | null;
    categoria?: string | null;
    quantidade_portas?: number | null;
    endereco?: string | null;
    cidade?: string | null;
    estado?: string | null;
    pais?: string | null;
}

