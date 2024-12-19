// console.log("test");
async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  //   console.log(response);
  const jsonUpgrades = await response.json();
  console.log(jsonUpgrades);
}
getUpgrades();
