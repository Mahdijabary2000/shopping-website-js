
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
number_product=document.querySelector('#number-product')
const mainez_icon=document.querySelector('.mainez')

const plus_icon=document.querySelector('.pluse')
const totalprice=document.querySelector('.total-price')





//
 


 let conter=0

//eventlistener
eventlisteners()
function eventlisteners(){
  shoess.addEventListener('click',buyshoes)
  shopping.addEventListener('click',removeCart)
  clearCart.addEventListener('click',removeAll)
  document.addEventListener('DOMContentLoaded', showCoursesOnLoad)
  // plus_icon.addEventListener('click',plus)
  // mainez_icon.addEventListener('click',mainez)
}




//function

function plus(){
 let x= number_product.textContent=++conter
 return x

}
function mainez(){
  let y= number_product.textContent=--conter
  return y;
 
 }
 
  




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
          
            
        </td>

        <td>
            <p style="font-size:16px;">${shoesInfo.title}</p>
            <img src="./assets/image/bagcheck.svg" style="width: 17px;height: 17px;margin-left: 1rem;" alt="">
            <span style="color:#fff;">موجود در انبارفروشگاه</span>
            <p style="font-size: 1.5rem;">${shoesInfo.price}</p>
        </td>
        <td>
                <a  href='#' data-id='${shoesInfo.id}'><img class='remove' src='./assets/image/remove.svg'style="margin-right: 40px;"/></a> 
        </td>

    </tr>

  `
  shopping.appendChild(row)

  saveToStorage(shoesInfo)
  

  
  // addtoLocalstoreage(shoesInfo)
  
}


function saveToStorage(course){
  // get array of courses from storage
  let courses = getFromStorage()

  // add the new course to the array of courses
  courses.push(course)

  localStorage.setItem('courses', JSON.stringify(courses) )

}

function getFromStorage(){
  let courses;

  // if courses exist before
  if (localStorage.getItem('courses')) {
      courses = JSON.parse(localStorage.getItem('courses'))
  } else {
      courses = []
  }

  return courses
}


function removeCart(e){
  let course , courseId;
  if(e.target.classList.contains('remove')){
   e.target.parentElement.parentElement.parentElement.remove()
  }
  course =  e.target.parentElement.parentElement
  courseId = course.querySelector('a').getAttribute('data-id')
  console.log(course);
  removeCourseLS(courseId)
}
function removeCourseLS(id){
  let coursesLS = getFromStorage()

  coursesLS.forEach(function(course , index){
      if(course.id === id){
          coursesLS.splice(index , 1)
      }
  });

  localStorage.setItem('courses', JSON.stringify(coursesLS))
}

function removeAll(e){
  while(shopping.firstChild){
    shopping.firstChild.remove() 
    
}
clearCartLS()
}
function clearCartLS(){
  localStorage.clear()
}
function showCoursesOnLoad(){
  let coursesLS = getFromStorage();

  // add courses into the cart
  coursesLS.forEach(function(shoesInfo) {
    let row=document.createElement('tr')
    row.innerHTML=
    `
      <tr>
          <td>
              <img src=${shoesInfo.image} style="width: 110px; height: 80px;" />
            
              <div>
              <button class="pluse"><img  src="./assets/image/plus.svg" alt=""></button>    
                 <p id="number-product">1</p>
              <button class="mainez"><img src="./assets/image/dash.svg" alt=""></button>
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
     
  });
  
}

