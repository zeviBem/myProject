
const data = JSON.parse(localStorage.getItem('data'));
console.log(data)
const params = window.location.search;
const searchParams = new URLSearchParams(params);
const productId = Number(searchParams.get('productId'))
const i = data[productId-1]
const cardProduct = document.getElementById('privetCard');

const createDivProduct = document.createElement('div')
createDivProduct.classList.add('styleCreateProduct')


const createImgProduct = document.createElement('img')
createImgProduct.src = i.image
createImgProduct.classList.add('styleImg')
const divImg = document.createElement('div')
divImg.classList.add('styleImgProduct')
divImg.appendChild(createImgProduct)

const divAbout = document.createElement('div')
divAbout.classList.add('styleDivProduct')
const createTitleH3Product = document.createElement('h3')
createTitleH3Product.innerText = 'Title'

const createTitleProduct = document.createElement('p')
createTitleProduct.innerText = i.title

const createDescriptionH3Product = document.createElement('h3')
createDescriptionH3Product.innerText = 'Description'

const createDescriptionProduct = document.createElement('p')
createDescriptionProduct.innerText = i.description
const createCategoryH3Product = document.createElement('h3')
createCategoryH3Product.innerText = 'Category'

const createCategoryProduct = document.createElement('p')
createCategoryProduct.innerText = i.category

const createPriceH3 = document.createElement('h3')
createPriceH3.innerText = 'Price'
const createPrice = document.createElement('span')
createPrice.innerText = i.price
divAbout.append(createTitleH3Product, createTitleProduct, createDescriptionH3Product, createDescriptionProduct, createCategoryH3Product, createCategoryProduct, createPriceH3, createPrice)
cardProduct.append(divImg, divAbout)
// document.body.append(cardProduct)

