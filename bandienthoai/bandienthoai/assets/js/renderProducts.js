// js/renderProducts.js

function renderProductsToContainer(productList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    productList.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
            <a href="#">
                <img src="${product.image}" alt="${product.name}" class="img-product">
                <i class="name-product white">${product.name}</i>
                <i class="price-product white">${product.price}</i>
            </a>
        `;

        productDiv.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "./chitiet.html";
        });

        container.appendChild(productDiv);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderProductsToContainer(products.noibat, "noibat-products");
    renderProductsToContainer(products.iphone, "iphone-products");
    renderProductsToContainer(products.oppo, "oppo-products");
    renderProductsToContainer(products.samsung, "samsung-products");
    renderProductsToContainer(products.realme, "realme-products");
    renderProductsToContainer(products.xiaomi, "xiaomi-products");
    renderProductsToContainer(products.vivo, "vivo-products");
});
