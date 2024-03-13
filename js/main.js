const API_URL = "https://api.escuelajs.co/api/v1/products"
const wrapper = document.querySelector("wrapper")
const loading = document.querySelector(".loading")

async function fetchData(api){
    let data = await fetch(api)

    data 
    .json()
    .then(res =>createCard(res))
    .catch(err =>console.log(err))
    .finally(()=>{
        loading.style.display ="none"
    })
}
fetchData(API_URL)

function createCard(data){
    console.log(data);
   data.forEach(({images,title,creationAt})=>{
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
  <img src=${images} alt="">
            <h2>${title}</h2>
            <p>${creationAt}</p>  
            `
            card.addEventListener("click",()=> singleRoute(id))
            wrapper.appendChild(card)
   })
}

function singleRoute(id){
    console.log(id);
    window.open(`/pages/product.html?id=${id}`,"_self")
}