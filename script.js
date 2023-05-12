items = [];
times=[]

document.getElementById("addtolist").addEventListener("click", addtolist);

document.getElementById("findrandom").addEventListener("click", findrandomf);

document.getElementsByClassName("close")[0].addEventListener("click", hidef)

document.getElementById('findtimes').addEventListener("change",resetf)

function resetf(){
  for(let i=0;i<items.length;i++){
    document.getElementsByClassName('listitem')[i].innerText=items[i]
  times[i]=0
    document.getElementsByClassName('listitem')[i].style = 'color:var(--color2)'
  }
}

function hidef(){
document.getElementsByClassName("message")[0].style='display:none;'
}



function addtolist() {
  let a = document.getElementById("listadd").value;
  document.getElementById("listadd").value = "";
  document.getElementById(
    "listitems"
  ).innerHTML += `<li class='listitem'>${a}</li>`;
  items[items.length] = a;
  document.getElementById("noofitems").innerText = `${items.length} items`;
  document.getElementById('listadd').focus()
  for(let i=0;i<items.length;i++){
    times[i]=0
  }
}
function findrandom() {
  let b = Math.floor(Math.random() * items.length);
  times[b]+=1;
  document.getElementsByClassName("listitem")[b].innerText = `${items[b]} - ${times[b]}`;
  document.getElementsByClassName("listitem")[b].style = "color:var(--color4)";
}
function findrandomf(){
  let n=parseInt(document.getElementById('findtimes').value)
  if (n<1){
    document.getElementsByClassName('message')[0].style='display:block';
    document.querySelector('.message .content').innerText='Enter a number greater than 0.'
    document.getElementById('findtimes').focus()
  }
  else
  if(n>1){
    for(let i=0;i<n;i++){
      findrandom()
    }
  }
  else{
    findrandom()
  }
}

if(document.getElementById('listadd').focus){
  document.getElementById('listadd').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addtolist").click();
    }
})
}
