// console.log("test");
let gameData = {
  pats: 0,
  patsPerSecond: 0,
};

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

gameData = await JSON.parse(localStorage.getItem("Pat Data"));
console.log(gameData);
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function () {
  gameData.pats = 0;
  gameData.patsPerSecond = 0;
});

const dogClicker = document.getElementById("dogclicker");
dogClicker.addEventListener("click", function () {
  gameData.pats = gameData.pats + 1;
});

const totalPatContainer = document.getElementById("total-pats");
let totalPatCounter = document.createElement("h2");
totalPatCounter.id = "total-pat-counter";
totalPatContainer.appendChild(totalPatCounter);

const patPerSecondContainer = document.getElementById("current-pps");
let ppsCounter = document.createElement("h3");
ppsCounter.id = "pps-counter";
patPerSecondContainer.appendChild(ppsCounter);

setInterval(function () {
  gameData.pats = add(gameData.pats, gameData.patsPerSecond);
  // console.log(gameData.pats);
  totalPatCounter.textContent = `Total Pats: ${gameData.pats}`;
  ppsCounter.textContent = `PPS (Pats per Second: ${gameData.patsPerSecond})`;
  localStorage.setItem("Pat Data", JSON.stringify(gameData));
}, 1000);

const shopBox = document.getElementById("shop-box");
const dogClickerButton = document.getElementById("dogclicker");

async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  //   console.log(response);
  let jsonUpgrades = await response.json();
  //   console.log(jsonUpgrades);

  let shopItems = [];
  shopItems.push(jsonUpgrades);
  console.log(shopItems);

  //editing the API's name data
  shopItems[0][0].name = "Auto-Patter";
  shopItems[0][1].name = "Enhanced Auto-Pat";
  shopItems[0][2].name = "Pat Farm";
  shopItems[0][3].name = "Robot Patter";
  shopItems[0][4].name = "Pat Factory";
  shopItems[0][5].name = "Magic Pat";
  shopItems[0][6].name = "Time Machine";
  shopItems[0][7].name = "Quantum Pat";
  shopItems[0][8].name = "Hand of Zeus";
  shopItems[0][9].name = "Interdimensional Pat Machine";

  function renderUpgrades() {
    for (let i = 0; i < shopItems[0].length; i++) {
      console.log(i);
      const itemContainer = document.createElement("div");
      itemContainer.style.width = "100%";
      itemContainer.className = "item-container";
      shopBox.appendChild(itemContainer);

      const upgradeItem = document.createElement("h4");
      upgradeItem.textContent = `${shopItems[0][i].name}`;
      upgradeItem.className = "upgrade-item";

      const upgradeIncrease = document.createElement("p");
      upgradeIncrease.textContent = `+${shopItems[0][i].increase} pats per second`;
      upgradeIncrease.className = "upgrade-increase";
      itemContainer.appendChild(upgradeIncrease);

      const buyButton = document.createElement("button");
      buyButton.textContent = `Buy: ${shopItems[0][i].cost}`;
      buyButton.className = "buy-button";
      buyButton.addEventListener("click", function () {
        if (gameData.pats < shopItems[0][i].cost) {
          alert("Not enough pats!");
        } else if (gameData.pats >= shopItems[0][i].cost) {
          gameData.pats = subtract(gameData.pats, shopItems[0][i].cost);
          gameData.patsPerSecond = add(
            gameData.patsPerSecond,
            shopItems[0][i].increase
          );
        }
        console.log(`Pats: ${gameData.pats}`);
        console.log(`PPS: ${gameData.patsPerSecond}`);
      });

      itemContainer.appendChild(upgradeItem);
      itemContainer.appendChild(buyButton);
    }
  }
  renderUpgrades();
}
getUpgrades();
