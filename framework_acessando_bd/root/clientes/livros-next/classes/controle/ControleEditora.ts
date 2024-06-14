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
            return editoraFiltrada[0].nome;
        } else { 
            return undefined;
        }
    };
    getEditoras() { 
        return editoras;
    };


}

