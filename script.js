function addToCart(name, price, qtyId){
    let quantity = document.getElementById(qtyId).value;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        quantity: quantity
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}

function loadCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cartContainer");
    let total = 0;

    container.innerHTML="";

    cart.forEach(item=>{
        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        container.innerHTML += `
        <div class="food-card">
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: ₹${itemTotal}</p>
        </div>
        `;
    });

    document.getElementById("totalAmount").innerText = total;
}
