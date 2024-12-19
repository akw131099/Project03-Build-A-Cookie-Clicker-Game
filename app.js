// console.log("test");
let gameData = {
  pats: 0,
  patsPerSecond: 0,
};

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

  function renderUpgrades() {
    for (let i = 0; i < shopItems[0].length; i++) {
      console.log(i);
      const upgradeItem = document.createElement("h3");
      upgradeItem.textContent = shopItems[0][i].name;
      shopBox.appendChild(upgradeItem);
    }
  }
  renderUpgrades();
}
getUpgrades();
