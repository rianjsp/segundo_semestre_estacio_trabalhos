// Funções de sorteamento - 1° Swapping
let swap = (vetor, a, b) => {

    if (a < 0 || b < 0 || a >= vetor.length || b >= vetor.length) {
        throw new Error('Índice fora dos limites do vetor.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os índices devem ser números!');
    }

    let temp = vetor[a];
    vetor[a] = vetor[b];
    vetor[b] = temp;

    return vetor;
}



// Funções de sorteamento - 2° Shuffle
let shuffle = (vetor, n) => {
    if (n <= vetor.length) {
        for (let i = 0; i < n; i++) {
            let ind_aleot = Math.floor(Math.random() * vetor.length);
            let temp = vetor[ind_aleot];
            vetor[ind_aleot] = vetor[i];
            vetor[i] = temp;
        }
        return vetor;
    } else {
        console.log('Número de trocas não pode exceder o tamanho do array');
    }
}


// Funções de sorteamento - 2° BubbleSort
let bubbleSort = (vetor) => {

    let tam = vetor.length
    for (let i = 0; i < tam; i++) {
        for (let j = 0; j < tam - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }

    return vetor

}


// Funções de sorteamento - 3° SelectionSort
let selectionSort = (vetor) => {
    let tam = vetor.length;

    for (let i = 0; i < tam; i++) {
        let minIndex = i;
        for (let j = i + 1; j < tam; j++) {
            if (vetor[j] < vetor[minIndex]) { // Para alterar a ordem do vetor basta trocar (< por >)
                minIndex = j
            }
        }
        [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]]
    }

    return vetor
}


// Funções de sorteamento - 4° QuickSort
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}


// Funções Add Misturar e Ordenar
let itens = [];
let itens_new = [];
let result;

function add() {
    let ipt_valor = document.getElementById('valor').value;
    let display = document.getElementById('display');

    display.innerHTML += ipt_valor + ', ';

    // Atualize o array 'itens' com os valores do display e elimina o iten vazio final
    itens = display.value.split(',').filter(item => item.trim() !== '');

    // Converta os itens para números inteiros antes de adicionar ao array itens_new
    itens_new = itens.map(item => parseInt(item));

    console.log(itens);
    console.log(itens_new);
    
    return itens_new;
}

function ordenar() {
    let select = document.getElementById('select_order').value;
    if (select == 'bubblesort') { 
        result = bubbleSort(itens_new);
        console.log(result);
        
        // Atualize o conteúdo do textarea com os resultados ordenados
        document.getElementById('display').innerHTML = itens_new;
    }
}


function misturar() { }