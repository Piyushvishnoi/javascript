var contacts = [
  {
    firstname: "Piyush",
    lastname: "Vishnoi",
    number: "983938232",
    likes: ["fruits", "coding", "brownie"],
  },
  {
    firstname: "Omji",
    lastname: "Shukla",
    number: "9839382121",
    likes: ["eggcurry", "Gem preperation", "kajukatli"],
  },
];
function lookupProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstname === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "no such contacts";
}
var data = lookupProfile("Piyus", "lastname");
console.log(data);
