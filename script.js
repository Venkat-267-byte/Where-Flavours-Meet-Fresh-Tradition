// ================= USER AUTH =================

function registerUser() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({name, email, password});
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered Successfully!");
    window.location.href = "login.html";
}

function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email === email && u.password === password);

    if(user){
        alert("Login Successful!");
        window.location.href = "menu.html";
    } else {
        alert("Invalid Credentials!");
    }
}

// ================= ADMIN =================

function addFood() {
    let name = document.getElementById("foodName").value;
    let desc = document.getElementById("foodDesc").value;
    let price = document.getElementById("foodPrice").value;

    let foods = JSON.parse(localStorage.getItem("foods")) || [];
    foods.push({name, desc, price});
    localStorage.setItem("foods", JSON.stringify(foods));

    alert("Food Added Successfully!");
}

// ================= MENU =================

function loadMenu() {
    let foods = JSON.parse(localStorage.getItem("foods")) || [];
    let container = document.getElementById("menuContainer");

    container.innerHTML = "";

    foods.forEach((food, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${food.name}</h3>
                <p>${food.desc}</p>
                <p>₹${food.price}</p>
                <button onclick="addToCart(${index})" class="btn">Add to Cart</button>
            </div>
        `;
    });
}

// ================= CART =================

function addToCart(index) {
    let foods = JSON.parse(localStorage.getItem("foods"));
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(foods[index]);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cartContainer");
    let total = 0;

    container.innerHTML = "";

    cart.forEach(item => {
        total += parseFloat(item.price);
        container.innerHTML += `
            <div class="card">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>
        `;
    });

    document.getElementById("cartTotal").innerText = total;
    localStorage.setItem("subtotal", total);
}

// ================= BILL =================

function generateBill() {
    let subtotal = parseFloat(localStorage.getItem("subtotal")) || 0;
    let gst = subtotal * 0.18;
    let finalAmount = subtotal + gst;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("gst").innerText = gst.toFixed(2);
    document.getElementById("finalAmount").innerText = finalAmount.toFixed(2);
}
