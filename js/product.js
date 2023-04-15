import { productsData } from "../js/product.Data.js";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
link.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
})
);
const products = document.querySelector('.product')


eventlisteners()
function eventlisteners() {
  products.addEventListener('click', froshItem)
}

export function froshItem(e) {
  e.preventDefault()
  if (e.target.classList.contains('image-product')) {
    const informations = e.target;
    const shoesId = informations.getAttribute('data-id')
    console.log(shoesId);
    return (shoesId)
  }

}
//   function getInformation(informations){



// }




//peimayesh dar array{

//forOf
// for(let i of  productsData){
// const productsDiv = document.createElement("div");
//     productsDiv.classList.add("product-item");
//     productsDiv.innerHTML = `
//     <a><img class="image-product" data-id=${i.id} src=${i.imageUrl} alt=""></a>
//     <p class="text-product">${i.title}</p>
//     <span class="price-product">${i.price}</span>
//     <button class="button-product" data-id=${i.id}><a href="./frosh.html" > add to cart </a>  </button>
//     `
// products.appendChild(productsDiv);};






//foreech
// productsData.forEach(i => {
//     const productsDiv = document.createElement("div");
//         productsDiv.classList.add("product-item");
//         productsDiv.innerHTML = `
//         <img src=${i.imageUrl} alt="">
//         <p class="text-product">${i.title}</p>
//         <span class="price-product">${i.price}</span>
//         <button class="button-product" data-id=${i.id}><a href="./frosh.html" > add to cart </a>  </button>
//         `  
//     products.appendChild(productsDiv);});



//search
const searchInput = document.querySelector("#searchbox");
const productsDOM = document.querySelector(".product");
const searchBox = document.querySelector('.search-box')


let allProductsdata = [];
// console.log(allProductsdata);
const filters = {
  searchItems: "",
};

function getProductaData() {
  return productsData;
}

document.addEventListener("DOMContentLoaded", () => {
  allProductsdata = getProductaData();
  renderProducts(allProductsdata, filters, productsDOM);
});

function renderProducts(_products, _filters, container) {
  const filteredProducts = _products.filter((p) => {
    return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
  });

  container.innerHTML = "";
  // render to DOM
  filteredProducts.forEach((item, index) => {
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product-item");
    productsDiv.innerHTML = `
          <a href="./fros.html"><img class="image-product" data-id=${item.id} src=${item.imageUrl} alt=""></a>
          <p class="text-product">${item.title}</p>
          <span class="price-product">${item.price}</span>
          <button class="button-product" data-id=${item.id}><a href="#" > اضافه کردن به سبد خرید </a>  </button>
          `
    // append to DOM

    container.appendChild(productsDiv);


    console.log(productsDiv);
  });
}

// searchBox.innerHTML=`${}`;
searchInput.addEventListener("input", (e) => {
  searchBox.innerHTML = "";
  const filteredProducts = allProductsdata.filter((p) => {
    return p.title.toLowerCase().includes(e.target.value.toLowerCase());
  });
  //  searchBox.innerHTML = "";
  // filters.searchItems = e.target.value;
  if (filteredProducts.length === allProductsdata.length) return;

  if (filteredProducts.length === 0) {
    searchBox.innerHTML = "<p>موردی یافت نشد<p>";
  }
  filteredProducts.forEach((item, index) => {
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product-item");
    productsDiv.innerHTML = `
          <a ><img class="image-product" data-id=${item.id} src=${item.imageUrl} alt=""></a>
          <p class="text-product">${item.title}</p>
          <span class="price-product">${item.price}</span>
          <button class="button-product" data-id=${item.id}><a  > add to cart </a>  </button>
          `
    // append to DOM

    searchBox.appendChild(productsDiv);


    console.log(productsDiv);
  });

});


