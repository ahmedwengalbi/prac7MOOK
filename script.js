// ============================================
// Блок 1. Изменение текста и стиля по клику
// ============================================
const button = document.getElementById("myButton");
const text = document.getElementById("text");

button.addEventListener("click", function () {
  text.textContent = "Кнопка была нажата!";
  text.style.color = "green";
  text.style.fontSize = "22px";
  text.style.fontWeight = "bold";
});

// ============================================
// Блок 2. Смена и сброс фона страницы
// ============================================
const bgButton = document.getElementById("bgButton");
const resetButton = document.getElementById("resetButton");

bgButton.addEventListener("click", function () {
  // случайный приятный цвет
  const colors = ["#e0e0e0", "#d1e7dd", "#fde2e4", "#e2eafc", "#fff3cd"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = random;
});

resetButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "";
});

// ============================================
// Блок 3. Счётчик кликов
// ============================================
const counterButton = document.getElementById("counterButton");
let count = 0;

counterButton.addEventListener("click", function () {
  count++;
  counterButton.textContent = "Кликнуто: " + count + " раз";
});

// ============================================
// Блок 4. Приветствие по имени из input
// ============================================
const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greetText = document.getElementById("greetText");

greetButton.addEventListener("click", function () {
  const name = nameInput.value.trim();
  if (name === "") {
    greetText.textContent = "Сначала введите имя 🙂";
    greetText.style.color = "crimson";
  } else {
    greetText.textContent = "Привет, " + name + "!";
    greetText.style.color = "#365a80";
  }
});

// Бонус: приветствие по Enter
nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    greetButton.click();
  }
});
