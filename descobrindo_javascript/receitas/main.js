function getListaIngredientes(receita) { 
    let texto = '<ul>';

    const ingredientes = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`);
    const listaIngredientes = ingredientes.reduce((acumulador, ingrediente) => acumulador + ingrediente, '');
    texto += listaIngredientes + '</ul>';

    return texto;
}

function getCard(receita) { 
    const cardHtml = `
        <div class="card p-1 m-2" style="width: 250px;">
            <img src="${receita.imagem}" class="card-img-top border " alt="Imagem da Receita">
            <div class="card-body">
                <h2 class="card-title">${receita.titulo}</h2>
                <div class="card-text d-flex flex-wrap">
                    ${getListaIngredientes(receita)} 
                    <hr> 
                    ${receita.preparo} 
                </div>
            </div>
        </div>
    `;

    return cardHtml;
}

function preencheCatalogo(receitas) {
    const pnlCatalogo = document.getElementById('pnlCatalogo');

    const htmlReceitas_1 = receitas.map(receita => getCard(receita)).join('');

    pnlCatalogo.innerHTML = htmlReceitas_1;
}

// Receitas em formato JSON - Quanto mais Receitas, mais CARD'S.
const receitas = [{
    titulo: 'Donuts',
    imagem: './img/donuts.jpg',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ingredientes: [
        '3 maçãs',
        '1 xícara de açúcar',
        '1/2 xícara de farinha de trigo',
        '1/2 colher de chá de canela',
        '1/4 colher de chá de noz-moscada',
        'Massa para torta'
    ]
},{
    titulo: 'Jambalaya',
    imagem: './img/jambalaya.jpeg',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ingredientes: [
        '3 maçãs',
        '1 xícara de açúcar',
        '1/2 xícara de farinha de trigo',
        '1/2 colher de chá de canela',
        '1/4 colher de chá de noz-moscada',
        'Massa para torta'
    ]
},{
    titulo: 'Salada de Legumes',
    imagem: './img/salada.png',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ingredientes: [
        '3 maçãs',
        '1 xícara de açúcar',
        '1/2 xícara de farinha de trigo',
        '1/2 colher de chá de canela',
        '1/4 colher de chá de noz-moscada',
        'Massa para torta'
    ]
},{
    titulo: 'Torta de Maçã',
    imagem: './img/goulash_hungaro.jpg',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ingredientes: [
        '3 maçãs',
        '1 xícara de açúcar',
        '1/2 xícara de farinha de trigo',
        '1/2 colher de chá de canela',
        '1/4 colher de chá de noz-moscada',
        'Massa para torta'
    ]
},{
    titulo: 'Doce de travessa',
    imagem: './img/doce_travessa.jpg',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ingredientes: [
        '3 maçãs',
        '1 xícara de açúcar',
        '1/2 xícara de farinha de trigo',
        '1/2 colher de chá de canela',
        '1/4 colher de chá de noz-moscada',
        'Massa para torta'
    ]
}];

document.addEventListener('DOMContentLoaded', () => {
    preencheCatalogo(receitas);
});