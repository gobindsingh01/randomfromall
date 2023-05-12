items = [];

document.getElementById("addtolist").addEventListener("click", addtolist);

document.getElementById("findrandom").addEventListener("click", findrandom);

function addtolist() {
  let a = document.getElementById("listadd").value;
  document.getElementById("listadd").value = "";
  document.getElementById(
    "listitems"
  ).innerHTML += `<li class='listitem'>${a}</li>`;
  items[items.length] = a;
  document.getElementById("noofitems").innerText = `${items.length} items`;
  document.getElementById('listadd').focus()
}
function findrandom() {
  let b = Math.floor(Math.random() * items.length + 1);
  document.getElementsByClassName("listitem")[b].style = "color:var(--color4)";
}
