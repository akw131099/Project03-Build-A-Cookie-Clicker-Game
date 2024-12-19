// console.log("test");
let gameData = {
  pats: 0,
  patsPerSecond: 0,
};

async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  //   console.log(response);
  const jsonUpgrades = await response.json();
  //   console.log(jsonUpgrades);

  const shopItems = [];
  shopItems.push(jsonUpgrades);
  console.log(shopItems);
}
getUpgrades();
