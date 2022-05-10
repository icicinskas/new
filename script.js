"use strict";

var form = document.querySelector("form");
var product = document.querySelector("#product");
var price = document.querySelector("#price");
var data = document.querySelector("#data");
var index = 0;
var products = [];

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  print() {
    var span = document.createElement("span");
    span.innerText = this.name + ", ";
    span.setAttribute("index", index);
    index++;
    data.append(span);

    //parodo produkto kaina
    span.addEventListener("click", function () {
      var ourIndex = this.getAttribute("index");
      var productName = products[ourIndex].name;
      var productPrice = products[ourIndex].price;
      alert(`${productName} kaina yra ${productPrice} €`);
    });
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (product.value && price.value) {
    // sukuria nauja objekta
    var newProduct = new Product(product.value, Number(price.value));

    //prideda nauja objekta i masyva
    products.push(newProduct);

    //atspausdina
    newProduct.print();
  } else {
    alert("uzpidykite visus laukelius");
  }

  //isvalo inputs
  product.value = "";
  price.value = "";
  console.log(products);
});
