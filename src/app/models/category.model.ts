export interface Category {

    id: number;
    descricao: string;
    subCategorias: Category[]
}