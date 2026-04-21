async function fetchProducts() {
  let container = document.getElementById("productList");
  container.innerHTML = "Loading...";

  let response = await fetch('https://fakestoreapi.com/products');

  let data = await response.json();

  displayProducts(data);
}

function displayProducts(products) {
  let container = document.getElementById("productList");
  container.innerHTML = "";

  products.forEach(product => {
    let div = document.createElement("div");

    div.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.image}" width="100">
      <p>Price: $${product.price}</p>
      <hr>
    `;

    container.appendChild(div);
  });
}

// call function
fetchProducts();