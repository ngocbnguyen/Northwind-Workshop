"use strict";

function loadAllProducts() {
    fetch("http://localhost:8081/api/products")
        .then(response=>response.json())
        .then(data=>{
            data.forEach(p => {
                const d = document.createElement("div");
                d.innerHTML = `<a href="detail.html?id=${p.productId}">${p.productName}</a>`;
                results.append(d);
})
        })

window.onload = () => {
    loadAllProducts();
}