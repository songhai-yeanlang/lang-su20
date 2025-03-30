let dashboardShow = document.getElementById('dashboardShow');
let myProducts = document.getElementById('myProducts');
let myGategories = document.getElementById('myGategories');
let myOrders = document.getElementById('myOrders');
let myUsers = document.getElementById('myUsers');
let myListProduct = document.getElementById('myListProduct')
let myListGategory = document.getElementById('myListGategory')

function getDashboard() {
    dashboardShow.classList.remove('d-none');
    myProducts.classList.add('d-none');
    myGategories.classList.add('d-none');
    myOrders.classList.add('d-none');
    myUsers.classList.add('d-none');
    h1ListProduct.classList.add('d-none')
    h1ListCategorirty.classList.remove('d-none')
}

function addProduct() {
    myListProduct.classList.remove('d-none')
    dashboardShow.classList.add('d-none');
    myProducts.classList.remove('d-none');
    myGategories.classList.add('d-none');
    myOrders.classList.add('d-none');
    myUsers.classList.add('d-none');
    h1ListProduct.classList.add('d-none')
    

}


function addGategories() {
    dashboardShow.classList.add('d-none');
    myProducts.classList.add('d-none');
    myGategories.classList.remove('d-none');
    myOrders.classList.add('d-none');
    myUsers.classList.add('d-none');
    h1ListProduct.classList.add('d-none')
    h1ListCategorirty.classList.remove('d-none')
    myListGategory.classList.remove('d-none');
}

function addOrders() {
    dashboardShow.classList.add('d-none');
    myProducts.classList.add('d-none');
    myGategories.classList.add('d-none');
    myOrders.classList.remove('d-none');
    myUsers.classList.add('d-none');
    h1ListProduct.classList.add('d-none')
    h1ListCategorirty.classList.remove('d-none')
    myListOrders.classList.remove('d-none');

}


function addUsers() {
    myListUser.classList.remove('d-none')
    dashboardShow.classList.add('d-none');
    myProducts.classList.add('d-none');
    myGategories.classList.add('d-none');
    myOrders.classList.add('d-none');
    myUsers.classList.remove('d-none');
    h1ListProduct.classList.add('d-none')
    h1ListCategorirty.classList.remove('d-none')
    h1listUsers.classList.add('d-none')
}



// founction list 


function listProduct() {
    dashboardShow.classList.add('d-none');
    myProducts.classList.remove('d-none');
    myGategories.classList.add('d-none');
    myOrders.classList.add('d-none');
    myUsers.classList.add('d-none');
    myListProduct.classList.add('d-none')
    h1ListProduct.classList.remove('d-none');
}
function listCategories() {

    dashboardShow.classList.add('d-none');
    myProducts.classList.add('d-none');
    myGategories.classList.remove('d-none');
    myOrders.classList.add('d-none');
    myUsers.classList.add('d-none');
    myListGategory.classList.add('d-none');
    h1ListCategorirty.classList.remove('d-none')
}
let myListOrders = document.getElementById('myListOrders')
function listOrders() {
    dashboardShow.classList.add('d-none');
    myProducts.classList.add('d-none');
    myGategories.classList.add('d-none');
    myOrders.classList.remove('d-none');
    myUsers.classList.add('d-none');
    myListOrders.classList.add('d-none');
    h1listOrders.classList.remove('d-none')
}
let myListUser = document.getElementById('myListUser')
let h1listUsers = document.getElementById('h1listUsers')
function listUsers() {
    myListUser.classList.remove('d-none')
    dashboardShow.classList.add('d-none');
    myProducts.classList.add('d-none');
    myGategories.classList.add('d-none');
    myOrders.classList.add('d-none');
    myUsers.classList.remove('d-none');

    myListUser.classList.add('d-none')
    h1listUsers.classList.remove('d-none')
}
