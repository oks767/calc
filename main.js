let valProduct = document.getElementById('product');
let newProduct;
let valPrice = document.getElementById('content-1');
let result = document.querySelector('.result')
document.getElementById('add-price').onclick = addPrice;
let arraySummed = [];
let summedValue = document.getElementById('summed');
// проверка наличия элементов в хранилище
!localStorage.newProduct ? newProduct = [] : newProduct = JSON.parse(localStorage.getItem('newProduct'));

//  Функция конструктор, которя принимает в себя описание товара и его цену
function Product(description, price) {
    this.description = description,
        this.price = price;

};




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




//  функия-событие 
function addPrice() {
    event.preventDefault();
    newProduct.push(new Product(valProduct.value, valPrice.value)); // значение инпутов в массиве
    arraySummed.push(valPrice.value);
    let arrayFloat = arraySummed.map(parseFloat);
    let totalSummed = arrayFloat.map(i => x += i, x = 0).reverse()[0]
    const updateLocal = () => {
        localStorage.setItem('newProduct', JSON.stringify(newProduct))
        localStorage.setItem('summed', JSON.stringify(totalSummed))
    }
    updateLocal();
    addHTMLList();
    valProduct.value = '';
    valPrice.value = '';
    summedValue.value = totalSummed;

}

