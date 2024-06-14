import { Livro } from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id?: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

class ControleLivro {
    async obterLivros(): Promise<Array<Livro>> {
        const response = await fetch(baseURL, { method: "GET" });
        const data: Array<LivroMongo> = await response.json();
        return data.map((livroMongo) => ({
            codigo: livroMongo._id || '',
            codEditora: livroMongo.codEditora,
            titulo: livroMongo.titulo,
            resumo: livroMongo.resumo,
            autores: livroMongo.autores
        }));
    }

    async incluirLivro(novoLivro: Livro): Promise<boolean> {
        const livroMongo: LivroMongo = {
            codEditora: novoLivro.codEditora,
            titulo: novoLivro.titulo,
            resumo: novoLivro.resumo,
            autores: novoLivro.autores
        };

        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(livroMongo)
        });

        return response.ok;
    }

    async excluirLivro(codigo: string): Promise<boolean> {
        const response = await fetch(`${baseURL}/${codigo}`, {
            method: "DELETE"
        });

        return response.ok;
    }
}

export default ControleLivro;
