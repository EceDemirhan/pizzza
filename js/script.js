const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");
searchBtn.addEventListener("click", function (ece) {
    searchForm.classList.toggle("active");
    console.log("1");
    console.log(ece);

    
});


cartBtn.addEventListener("click", function (e) {
    console.log("3");    console.log(e);

    cartItem.classList.toggle("active");

});
 
menuBtn.addEventListener("click", function (e) {
    console.log("2");
    console.log(e);
debugger;
    navbar.classList.toggle("active");

});

 
document.addEventListener("click", function (e) {
    console.log(e);
    debugger;
    if (
        !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)
    ) {
        searchForm.classList.remove("active");
    }

    if (!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)) {
        cartItem.classList.remove("active");
    }

    if (
        !e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)
    ) {
        navbar.classList.remove("active");
    }

});
