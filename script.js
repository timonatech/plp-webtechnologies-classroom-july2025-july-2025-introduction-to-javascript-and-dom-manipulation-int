// 🚀 JavaScript Fundamentals Assignment

// 🎯 Part 1: Variables & Conditionals
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (isNaN(age)) {
    document.getElementById("ageResult").textContent = "❌ Please enter a valid number!";
  } else if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are eligible!";
  } else {
    document.getElementById("ageResult").textContent = "❌ You are not eligible yet.";
  }
});

// ❤️ Part 2: Functions
function showTotal(price, tax) {
  let total = price + tax;
  alert("The total is: $" + total);
}

function toggleMessage() {
  let message = document.getElementById("toggleText");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

// 🔁 Part 3: Loops
document.getElementById("generateListBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear previous list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});

// 🌐 Part 4: DOM Manipulation
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f5f5f5" : "lightblue";
});

document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});
