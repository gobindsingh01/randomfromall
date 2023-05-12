items=[]

document.getElementById('addtolist').addEventListener('click',addtolist)



function addtolist(){
    let a=document.getElementById('listadd').value
    document.getElementById('listitems').innerText+=`<li>${a}</li>`
}