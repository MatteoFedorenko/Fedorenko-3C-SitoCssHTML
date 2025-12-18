// Наборы данных
const passChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

const adjs = ["Cool", "Swift", "Mighty", "Sky", "Cursed", "Neon", "Glitched", "Blaze", "Quantum", "Shadow", "Last", "Robo", "TheFastest", "Pipi", "Died", "Orbital", "Cyber", "Bad", "Good", "Little", "Cutie", "Fluffy", "Holly", "Indian", "Hot", "RIP", "Best", "Rude", "Spooky", "White", "Black", "Gay", "Neutral", "Elemental", "Gentle", "Scary", "Wild", "Pro", "Noob", "Brave", "Dark", "Neon", "Golden", "Alone", "Funny", "Cinese", "Skibidi", "Slay", "Angry", "Epic", "Italian", "Lazy", "Super", "Magic", "Strong", "Bloody", "Old", "Own", "Local", "Silly", "Hated", "Friendly", "Strange", "Stupid", "Godlike", "Angelic", "Golden", "Shiny", "Rainbow", "Flamy", "Killer", "TheStrongestOne"];
const nouns = ["Tiger", "Eagle", "Spike", "Cucumber", "Sky", "Flash", "Shinigami", "Champion", "Glitch", "Baller", "Quasar", "Ciccio", "Speedster", "Clown", "Love", "Boss", "Police", "Villian", "Kiwi", "Player", "Cube", "Ball", "Triangle", "Man", "Hero", "Potato", "Pixel", "Matvii", "Tommy", "Teacher", "Student", "Stellar", "Sniper", "Queen",  "Kid", "Beast", "Son", "Boxer", "Wind", "Dancer", "Rock", "Panda", "Skeleton", "Baby", "Angel", "Ninja", "King", "Hacker", "Legend", "God", "Lucifer", "Boy", "Warrior", "Ghost", "Storm", "Wolf", "Dragon", "Shadow", "Rider", "Coder", "Fighter", "Killer", "Hitman", "Brainrot", "Sahur", "Knight"];

let currentResult = "";
let saveCounter = 0; // Наш счетчик для нумерации

function generate() {
    const mode = document.querySelector('input[name="mode"]:checked').value;
    let result = "";

    if (mode === "pass") {
        // Генерация пароля (14 случайных символов)
        const len = 14;
        for (let i = 0; i < len; i++) {
            result += passChars.charAt(Math.floor(Math.random() * passChars.length));
        }
    } else {
        
        const randomAdj = adjs[Math.floor(Math.random() * adjs.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomNumber = Math.floor(Math.random() * 999);
        result = randomAdj + randomNoun + randomNumber;
    }

    currentResult = result;
    document.getElementById("display").innerText = result;
}

function save() {
    const display = document.getElementById("display");
    
    // Проверка, чтобы не сохранять пустую заглушку
    if (!currentResult || currentResult === "" || display.innerText === "Нажми 'Создать'") {
        return;
    }

    saveCounter++; // Увеличиваем номер строки
    
    const historyList = document.getElementById("historyList");
    
    // Создаем новый элемент
    const newItem = document.createElement("div");
    newItem.className = "history-item";
    
    // Вставляем структуру с номером и текстом
    newItem.innerHTML = `
        <span class="item-number">${saveCounter}.</span>
        <span class="item-text">${currentResult}</span>
    `;
    
    // Добавляем в начало списка (самый новый сверху)
    historyList.prepend(newItem);
}