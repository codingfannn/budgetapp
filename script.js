//Total Balance
const balanceElement = document.getElementById("balance");

//Value input
const valueInputElement = document.querySelector("input");

//Income/expense
const selectElement = document.querySelector("select");

//Addition button
const additionButtonElement = document.querySelector("footer button");

//Entry list
const entryListElement = document.querySelector("section ul");

console.log(balanceElement);
console.log(valueInputElement);
console.log(selectElement);
console.log(additionButtonElement);
console.log(entryListElement);

function addEntry(amount, operation) {
  const listEntry = document.createElement("li");

  const listEntryValue = document.createElement("strong");
  listEntryValue.innerText = amount;

  listEntry.appendChild(listEntryValue);

  entryListElement.appendChild(listEntry);
}

additionButtonElement.onclick = function () {
  console.log("Button was clicked");
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);
};
