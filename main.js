let valProduct = document.getElementById('product');
let newProduct;
let valPrice = document.getElementById('content-1');
let result = document.querySelector('.result')
document.getElementById('add-price').onclick = addPrice;
let arraySummed = [];
// проверка наличия элементов в хранилище
!localStorage.newProduct ? newProduct = [] : newProduct = JSON.parse(localStorage.getItem('newProduct'));

//  Функция конструктор, которя принимает в себя описание товара и его цену
function Product(description, price) {
    this.description = description,
        this.price = price;

};

// function Summed (name, summa){
//     this.name = 'Сумма',
//     this.summa = valPrice.value;
// }
const createTemplate = (task, index) => {
    return `
    <div class="result__item">
                <div class="name">${task.description}</div>
                <div class="price">${task.price}</div>
            </div>  `

}
let addHTMLList = () => {
    result.innerHTML = "";
    if (newProduct.length > 0) {
        newProduct.forEach((item, index) => {
            result.innerHTML += createTemplate(item, index);
        })
    }
}
// добавление суммы цен
// function summedPrices (Summed) {
//     let sum = 0;
//     for (let property of Object.values(Summed)){
//         sum += salary;
//     }
//     return sum;
// }

//  функия-событие 
function addPrice() {
    newProduct.push(new Product(valProduct.value, valPrice.value)); // значение инпутов в массиве
    arraySummed.push(new Summed(name, valPrice.value))
    const updateLocal = () => {
        localStorage.setItem('newProduct', JSON.stringify(newProduct))
        localStorage.setItem('summed', JSON.stringify())
    }
    updateLocal();
    addHTMLList();
    valProduct.value = '';
    valPrice.value = '';
}

