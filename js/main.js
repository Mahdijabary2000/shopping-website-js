// import { productsData } from "./image-product";
// /* silider mahsolat*/
// const slidesContainer = document.querySelector(".slides-container");
// const slides = document.querySelectorAll(".slide");
// const nextBtn = document.querySelector("#nextBtn");
// const prevBtn = document.querySelector("#prevBtn");
// const items = document.querySelectorAll(".item");

// const slideWidth = slides[0].clientWidth;
// let index = 0;

// slidesContainer.insertAdjacentHTML(
//   "afterbegin",
//   slides[slides.length - 1].outerHTML
// );
// slidesContainer.insertAdjacentHTML("beforeend", slides[0].outerHTML);

// slidesContainer.style.transform = `translateX(${-slideWidth}px)`;

// nextBtn.addEventListener("click", () => {
//   slidesContainer.style.transition = "all 0.3s ease-in-out";
  
//   index++;
//   slidesContainer.style.transform = `translateX(${
//     -slideWidth * (index + 1)
//   }px)`;

//   items.forEach((item) => item.classList.remove("active"));

//   if (index > slides.length - 1) {
//     setTimeout(() => {
//       index = 0;
//       slidesContainer.style.transform = `translateX(${-slideWidth}px)`;
//       items[index].classList.add("active");
//       slidesContainer.style.transition = "none";
//     }, 300);
//   } else {
//     items[index].classList.add("active");
//   }
// });

// prevBtn.addEventListener("click", () => {
//   slidesContainer.style.transition = "all 0.3s ease-in-out";

//   index--;
//   slidesContainer.style.transform = `translateX(${
//     -slideWidth * (index + 1)
//   }px)`;

//   items.forEach((item) => item.classList.remove("active"));

//   if (index < 0) {
//     setTimeout(() => {
//       index = slides.length - 1;
//       slidesContainer.style.transform = `translateX(${
//         -slideWidth * (index + 1)
//       }px)`;
//       items[index].classList.add("active");
//       slidesContainer.style.transition = "none";
//     }, 300);
//   } else {
//     items[index].classList.add("active");
//   }
// });

// items.forEach((item, i) => {
//   slidesContainer.style.transition = "all 0.3s ease-in-out";

//   item.addEventListener("click", () => {
//     items.forEach((item) => item.classList.remove("active"));
//     index = i;
//     item.classList.add("active");
//   slidesContainer.style.transition = "all 0.3s ease-in-out";

//     slidesContainer.style.transform = `translateX(${
//       -slideWidth * (index + 1)
//     }px)`;
//   });
// });

new Glider(document.querySelector('.one'), {
    slidesToScroll: 1,
    slidesToShow: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      next: '.glider-next',
      prev: '.glider-prev'
      
    }
  });
  new Glider(document.querySelector('.two'), {
    slidesToScroll: 1,
    slidesToShow: 2,
    draggable: true,
  
    arrows: {
      prev: '.glider-prev2',
      next: '.glider-next2'
    }
  });

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

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






//--------------//
//variable
const shoess=document.querySelector('.one'),
shopping=document.querySelector('#cart-content tbody'),
clearCart=document.querySelector('#clear-cart'),
totalprice=document.querySelector('.total-price').textContent
let cart = [];







//eventlistener
eventlisteners()
function eventlisteners(){
  shoess.addEventListener('click',buyshoes)
  shopping.addEventListener('click',removeCart)
  clearCart.addEventListener('click',removeAll)
}




//function


function buyshoes(e){
  e.preventDefault()
  if(e.target.classList.contains('add-to-cart')){
    const shoes=e.target.parentElement.parentElement.parentElement;
    
    getshoesInfo(shoes)
  }
}
function getshoesInfo(shoes){

  const shoesInfo={
    image:shoes.querySelector('img').src,
    title:shoes.querySelector('.text-shoese').textContent,
    price:shoes.querySelector('.price-shoes').textContent,
    id:shoes.querySelector('a').getAttribute('data-id')
    
  }

  addtocart(shoesInfo)
}

function addtocart(shoesInfo){
  let row=document.createElement('tr')
  row.innerHTML=
  `
    <tr>
        <td>
            <img src=${shoesInfo.image} style="width: 110px; height: 80px;" />
          
            <div>
                 <img class='pluse-Item' src="./assets/image/plus.svg" alt="">
                 <p class='number'>1</p>
                 
                 <img src="./assets/image/dash.svg" alt="">
            </div>
        </td>

        <td>
            <p style="font-size:16px;">${shoesInfo.title}</p>
            <img src="./assets/image/bagcheck.svg" style="width: 17px;height: 17px;margin-left: 1rem;" alt="">
            <span style="color: rgb(138, 136, 136);">موجود در انبارفروشگاه</span>
            <p style="font-size: 2rem;">${shoesInfo.price}</p>
        </td>
        <td>
                <a  href='#' data-id='${shoesInfo.id}'><img class='remove' src='./assets/image/remove.svg'style="margin-right: 40px;"/></a> 
        </td>

    </tr>

  `
  shopping.appendChild(row)
  

  
  console.log(totalprice);
  // addtoLocalstoreage(shoesInfo)
  
}

function removeCart(e){
  if(e.target.classList.contains('remove')){
   e.target.parentElement.parentElement.parentElement.remove()
  }
  
}

function removeAll(e){
  while(shopping.firstChild){
    shopping.firstChild.remove() 
}
}

function getLocalstorage(){
  let shoes;
  if(localStorage.getItem('shoeses')){
    shoes=JSON.parse(localStorage.getItem('shoeses'))
  }
  else{
    shoes-[]
  }
  return shoes
}


// function addtoLocalstoreage(shoesInfo){
//   let shoes1=getLocalstorage()
//   shoes1.push(shoesInfo)
//   localStorage.setItem('shoeses',JSON.stringify(shoes1))
// }

//---------------//









