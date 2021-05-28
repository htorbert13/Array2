var list = "";
var warriors = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Jerry",
    damage: 1,
    health: 12,
    warrior: true
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true
  },

  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true
  },
  {
    name: "Shorty",
    damage: 10,
    health: 3,
    warrior: false
  },
  {
    name: "Porty",
    damage: 1,
    health: 14,
    warrior: true
  },
  {
    name: "Perry",
    damage: 2,
    health: 9,
    warrior: true
  },
  {
    name: "Larry",
    damage: 2,
    health: 17,
    warrior: false
  }
];


warriors.forEach(num);
document.getElementById("objects").innerHTML = list;
function num(item) {
  if (item["health"] >= 10 && item["damage"] >= 2 && item["warrior"] == true) {
    if (item["name"].includes("A") || item["name"].includes("a")) {
      list += '<div style="color:red;">';
    } else {
      list += "<div>";
    }
    list +=
      "<h1>Name: " +
      item["name"] +
      "</h1>" +
      "<h2>Damage:" +
      item["damage"] +
      "</h2>" +
      "<h2>Health: " +
      item["health"] +
      "</h2>" +
      "</div>";
  }
}
for (var i = 0; i < warriors.length; i++) {
  var ele = document.createElement("div");
  var nameEle = document.createElement("h1");
  var damageEle = document.createElement("h2");
  var healthEle = document.createElement("h2");
  nameEle.innerHTML = warriors[i].name;
  damageEle.innerHTML = "Damage: " + warriors[i].damage;
  healthEle.innerHTML = "Health: " + warriors[i].health;
  ele.appendChild(nameEle);
  ele.appendChild(damageEle);
  ele.appendChild(healthEle);
}
