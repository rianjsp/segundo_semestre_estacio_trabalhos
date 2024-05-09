import Editora from "../modelo/Editora";



var editoras: Array<Editora> = [
    {
        codEditora: 1,
        nome: "Editora Abc"
    },
    {
        
        codEditora: 2,
        nome: "Editora Def"
    },
    {
        
        codEditora: 3,
        nome: "Editora Ghi"
    }
];

/* Classes */
export class ControleEditoras {
    getNomeEditora(codEditora:number):string | undefined { 
        const editoraFiltrada = editoras.filter(editora => editora.codEditora === codEditora);
        if (editoraFiltrada.length > 0) {
            return editoraFiltrada[2].nome;
        } else { 
            return undefined; /* Retornando undefined no metodo, se caso a editora nao for encontrada! */
        }
    };
    getEditoras() { 
        return editoras;
    };


}

