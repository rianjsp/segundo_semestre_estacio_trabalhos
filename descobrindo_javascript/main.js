// Receitas em formato json
const receitas = [{
    titulo: 'Torta de Maçã',
    imagem: 'salada.png',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ingredientes: [
        '3 maçãs',
        '1 xícara de açúcar',
        '1/2 xícara de farinha de trigo',
        '1/2 colher de chá de canela',
        '1/4 colher de chá de noz-moscada',
        'Massa para torta'
    ]
}]


let texto;
function getListaIngredientes(receitas) { 
    texto = '<ul>'

    const ingredientes = receitas[0].ingredientes.map(ingrediente => `<li>${ingrediente}</li>`);
    const listaIngredientes = ingredientes.reduce((acumulador, ingrediente) => acumulador + ingrediente, '');
    texto += listaIngredientes + '<ul>'

    return texto
}

function getCard(receitas) { 
    const pnl = document.getElementById('pnlCatalogo')
    const cardHtml = `
        <div class="card" style="width: 250px;">
            <img src="${receitas[0].imagem}" class="card-img-top" alt="Imagem da Receita">
            <div class="card-body">
                <h2 class="card-title">${receitas[0].titulo}</h2>
                <div class="card-text">
                    ${getListaIngredientes(receitas)} <!-- Adiciona a lista de ingredientes -->
                    <hr> <!-- Separador -->
                    ${receitas[0].preparo} <!-- Texto do campo preparo -->
                </div>
            </div>
        </div>
    `;

    pnl.innerHTML = cardHtml;
}

function preencheCatalogo(receitas) {
    // Captura o elemento pnlCatalogo através de getElementById
    const pnlCatalogo = document.getElementById('pnlCatalogo');

    // Obtém o texto HTML para os painéis de receita utilizando map e reduce
    const htmlReceitas = receitas.map(receita => getCard(receita)).reduce((acumulador, card) => acumulador + card, '');

    // Altera o innerHTML de pnlCatalogo para o texto HTML gerado
    pnlCatalogo.innerHTML = htmlReceitas;
}



console.log(getListaIngredientes(receita));
document.addEventListener('DOMContentLoaded', preencheCatalogo)