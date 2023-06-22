const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu')
const menuhamIcon = document.querySelector('.menu')
const productDetailCloseIcon = document.querySelector('.product-detail-close') 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const ProductDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener("click", toggleDesktopmenu);
menuhamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopmenu() {
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobilemenuClosed = mobileMenu.classList.contains('inactive');
   
    if (!isMobilemenuClosed) {
        mobileMenu.classList.add('inactive')
        }
    shoppingCartContainer.classList.toggle('inactive')
}

function closeProductDetailAside(){
    ProductDetailContainer.classList.add('inactive')
}

function openProductDetailAside(){
    ProductDetailContainer.classList.remove('inactive')
}

const productList = [];
productList.push({
    name: "Collar",
    price: 75,
    image: 'https://www.productosdecolombia.com/media/micrositios/collares-bisuteria-embera-bijouterie/necklaces-made-with-multicolor-shakiras-embera-necklace-AA-3_w9eGPml.jpg'
})
productList.push({
    name: 'earings',
    price: 30,
    image: 'https://www.productosdecolombia.com/media/micrositios/collares-bisuteria-embera-bijouterie/necklaces-made-with-multicolor-shakiras-embera-necklace-AA-3_w9eGPml.jpg'
})
productList.push({
    name: "bracelet",
    price: 85,
    image: 'https://www.productosdecolombia.com/media/micrositios/collares-bisuteria-embera-bijouterie/necklaces-made-with-multicolor-shakiras-embera-necklace-AA-3_w9eGPml.jpg'
})

function renderproducts(arr) {
for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add ('product-card')

    const productimg =document.createElement ('img');
    productimg.setAttribute('src', product.image);
    productimg.addEventListener('click', openProductDetailAside)

    const productinfo = document.createElement('div');
    productinfo.classList.add('product-info');

    const productinfoDiv = document.createElement ('div');

    const productPrice = document.createElement ('p');
    productPrice.innerText = '$' + product.price

    const productName = document.createElement('p');
    productName.innerText = product.name;


    productinfoDiv.appendChild(productPrice)
    productinfoDiv.appendChild(productName)
    
    const productinfofigure = document.createElement ('figure');
    const productimgcart = document.createElement ('img');
    productimgcart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productinfofigure.appendChild(productimgcart)
    productinfo.appendChild(productinfoDiv)
    productinfo.appendChild(productinfofigure)

    productCard.appendChild(productimg)
    productCard.appendChild(productinfo)

    cardsContainer.appendChild(productCard)
} }

renderproducts(productList)