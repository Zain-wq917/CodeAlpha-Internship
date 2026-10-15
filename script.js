const products=[{name:"Shoes",price:4500,img:"https://via.placeholder.com/300"},{name:"Watch",price:8500,img:"https://via.placeholder.com/300"},{name:"Bag",price:3500,img:"https://via.placeholder.com/300"},{name:"Headphone",price:2500,img:"https://via.placeholder.com/300"}];
let cart=[],total=0;
const c=document.getElementById("products-container");
products.forEach((p,i)=>{c.innerHTML+=`<div class="product-card"><img src="${p.img}"><h3>${p.name}</h3><p>Rs.${p.price}</p><button onclick="addToCart(${i})">Add to Cart</button></div>`});
function addToCart(i){cart.push(products[i]);total+=products[i].price;document.getElementById("cart-count").innerText=cart.length}
function openCart(){document.getElementById("cart-modal").style.display="block";let h="";cart.forEach(x=>h+=`<p>${x.name}</p>`);document.getElementById("cart-items").innerHTML=h;document.getElementById("cart-total").innerText=total}
function closeCart(){document.getElementById("cart-modal").style.display="none"}
function checkout(){alert("Order Done Rs."+total);cart=[];total=0;document.getElementById("cart-count").innerText=0;closeCart()}
