let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products", {method: "GET"});
    promesa.then( (response)=>{
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
                
            })
        .catch((error)=> console.log("Problema con el json", error));
    })
    .catch((err)=>console.log("existio un problema con la solicitud", err));
}//getData

function createCards(products){
    console.log(products.length);
    console.log(products[0].name);
    divData.innerHTML = "";
    
    products.forEach((product) => {
        const card = `
            <div class="card" style="width: 18rem; padding: 10px;">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-price">Precio: $${product.price}</p>
                    <a href="#" class="btn btn-primary">Siguiente producto</a>
                </div>
            </div>`
       
            divData.insertAdjacentHTML(`beforeend`,card);
        
    })

        
    
    //crear una card en el divData por cada producto con sus datos escenciales
    //de prefererencia usa forEach: name, description, image, price
}//createCards

getData();