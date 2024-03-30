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
    for (let i = 0; i < fim; i++) {
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
function add() {
    let valor_ad = document.getElementById('valor').value;
    let lista = document.getElementById('valores');

    let novo_elem = document.createElement('li');
    novo_elem.classList = 'row';
    novo_elem.innerHTML = valor_ad;

    // Adiciona o novo elemento à direita dos elementos existentes
    lista.appendChild(novo_elem);
}

function ordenar() {
    let lista = document.getElementById('valores');
    let filhos = Array.from(lista.children);
    let ord_tipo = document.getElementById('select_order').value;

    if (ord_tipo === 'bubblesort') {
        bubbleSort(filhos);
        atualizarLista(lista, filhos);
    }
}

function atualizarLista() {

}

function misturar() { }