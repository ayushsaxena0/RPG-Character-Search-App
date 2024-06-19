document
  .querySelector("#search-button")
  .addEventListener("click", getCharacter);

async function getCharacter() {
  try {
    const input = document.querySelector("#search-input").value;
    const url = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${input}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    show(data);
  } catch (err) {
    alert("Creature not found");
  }
}

function show(data) {
  const creatureName = document.querySelector("#creature-name");
  const creatureID = document.querySelector("#creature-id");
  const weight = document.querySelector("#weight");
  const height = document.querySelector("#height");
  const types = document.querySelector("#types");
  const specialAttackName = document.querySelector(".specialName");
  const specialAttackDesc = document.querySelector(".desc");
  const hp = document.querySelector("#hp");
  const attack = document.querySelector("#attack");
  const defense = document.querySelector("#defense");
  const specialAttack = document.querySelector("#special-attack");
  const specialDefense = document.querySelector("#special-defense");
  const speed = document.querySelector("#speed");
  if (data) {
    creatureName.innerText = data.name.toUpperCase();
    creatureID.innerText = `#${data.id}`;
    weight.innerText = `Weight: ${data.weight}`;
    height.innerText = `Height: ${data.height}`;
    types.innerHTML = arrLoop(data.types);
    specialAttackName.innerText = data.special.name;
    specialAttackDesc.innerText = data.special.description;
    hp.innerText = data.stats[0].base_stat;
    attack.innerText = data.stats[1].base_stat;
    defense.innerText = data.stats[2].base_stat;
    specialAttack.innerText = data.stats[3].base_stat;
    specialDefense.innerText = data.stats[4].base_stat;
    speed.innerText = data.stats[5].base_stat;
  }
}

function arrLoop(types) {
  let result = "";
  types.forEach((el) => {
    result += `<span>${el.name.toUpperCase()}</span>`;
  });
  return result;
}
