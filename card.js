fetch("./products.json").then(function (res) {
    return res.json()
}).then(function (result) {
    console.log(result)
    getDATA(result)

})

function getDATA(getRESULT) {
    let data = getRESULT.products
    let car_cards = document.querySelector(".card")
    for (let index = 0; index < data.length; index++) {
        car_cards.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[index].name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> 
`
    }
}
