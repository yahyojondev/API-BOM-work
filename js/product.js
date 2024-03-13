
const API_URL = "https://api.escuelajs.co/api/v1/products"
const img = document.querySelector(".product_image")


async function fetchSingleUser(api){
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")
    console.log(id);

    let data = await fetch(`${api}/${id}`)
    data 
    .json()
    .then(res=>singleUser(res))
    .catch(res=>console.log(res))
}
fetchSingleUser(API_URL)

function singleUser({image}){
    img.setAttribute("src",img)
    img.src= image
}