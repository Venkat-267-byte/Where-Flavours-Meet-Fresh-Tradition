function suggestFood() {
    let mood = document.getElementById("mood").value;
    let suggestion = document.getElementById("suggestion");

    if (mood === "comfort") {
        suggestion.innerHTML = "Suggested Dish: Pongal with Coconut Chutney 🍲";
    } 
    else if (mood === "celebration") {
        suggestion.innerHTML = "Suggested Dish: Payasam & Pulihora 🎉";
    } 
    else if (mood === "spicy") {
        suggestion.innerHTML = "Suggested Dish: Mirchi Bajji 🌶";
    } 
    else {
        suggestion.innerHTML = "Please select a mood!";
    }
}
