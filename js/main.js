// let myhttp = new XMLHttpRequest()
// let pizzaList =[]
// myhttp.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza")
// myhttp.send()
// myhttp.addEventListener("readystatechange", function(){
//     if(myhttp.readyState == 4 && myhttp.status==200){
//       pizzaList = JSON.parse(myhttp.response).recipes
//       console.log(pizzaList)
//       // pizzaList = pizzaList.slice(0,10)
//         display()
//     }
// })

let datalist =[]
async function getData(type){
  let res= await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`)
 let data = await res.json()
 datalist = data.recipes
 display()
}
getData("pizza")
function display(){
let temp=""
datalist.forEach((element) => {
    temp+=`<div id_number="${element.recipe_id}" class="col-md-3 item" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class="border border-danger text-center">
      <img src="${element.image_url}" alt="" class="w-100">
      <h6 class="pt-2">${element.title}</h6>
    </div>
  </div>`
})
document.getElementById("Myrow").innerHTML=temp  
getId()
}



function getId(){
  let item = document.querySelectorAll(".item")
  for(let i =0;i<navlink.length;i++){
    item[i].addEventListener("click", function(){
      let type = this.getAttribute("id_number")
      getSpec(type)
    })
  }
}



let navlink = document.querySelectorAll(".nav-link")

for(let i =0;i<navlink.length;i++){
  navlink[i].addEventListener("click", function(){
    let type = this.getAttribute("Categetype")
    getData(type)
  })
}


let dataSpec ={}

async function getSpec(type){
  let res= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${type}`)
  let data = await res.json()
 dataSpec = data.recipe
 displaySpec()
}
function displaySpec(){
  let temp=""
  dataSpec.ingredients.forEach((element) => {
    temp+=`<li>${element}</li>`
})
document.getElementById("myimge").setAttribute("src",dataSpec.image_url)
document.getElementById("myimge").setAttribute("src",dataSpec.image_url)
document.getElementById("title").innerHTML=dataSpec.title
document.getElementById("ingredients").innerHTML=temp
}

getSpec("47746")