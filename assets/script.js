const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sContent = document.getElementById("content");
const sNoteHits = document.getElementById("noteHits");
const sNoteAll = document.getElementById("noteAll");
const btnSalvar = document.querySelector('#btnSalvar');

let porcentHits = 0;



let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')
  
    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  
    if (edit) {
      sContent.value = itens[index].content
      porcentHits.value = itens[index].porcent
      id = index
    } else {
      sContent.value = ''
      porcentHits.value = ''
    }
}

btnSalvar.onclick = e => {
  porcentHits = ((sNoteHits.value / sNoteAll.value)*100).toFixed(2);

    if (sContent.value == '' || porcentHits == '') {
      return
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
      itens[id].content = sContent.value
      itens[id].porcent = porcentHits
    } else {
      itens.push({'content': sContent.value, 'porcent': porcentHits})
    }
  
    setItensBD()
  
    modal.classList.remove('active')
    loadItens()
    id = undefined
}
  
function insertItem(item, index){
    let tr = document.createElement('tr');
    let red = "";

    if(item.porcent < 75){
      red = 'style="color:red;"'
    }

    tr.innerHTML = `
    <td>${item.content}</td> 
    <td ${red}>${item.porcent}%</td> 
    <td class="acao"> 
        <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
    </td> 
    <td class="acao"> 
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
    `
    tbody.appendChild(tr)
}

function editItem(index){
    openModal(true, index)
    openModalMatter(true)
}

function deleteItem(index){
    itens.splice(index, 1)
    setItensBD();
    loadItens();
} 


function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)
    })
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens();




















const modalmatter = document.querySelector('.modal-container-matter');
const btnSalvarMatter = document.querySelector('#btnSalvarMatter');
const sNameMatter = document.getElementById("matter-name");
const tmatters = document.getElementById('matters');

function openModalMatter() {
  modalmatter.classList.add('active')

  modalmatter.onclick = e => {
    if (e.target.className.indexOf('.modal-container-matter') !== -1) {
      modalmatter.classList.remove('active')
    }
  }
}

btnSalvarMatter.onclick = e => {
    if (sNameMatter.value == '') {
      return
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
      itens[id].namematter = sNameMatter.value
    } else {
      itens.push({'namematter': sNameMatter.value})
    }
  
    setItensBD()
  
    modalmatter.classList.remove('activ')
    loadItens()
    id = undefined
}

function insertItemMatter(matter){
  let divmatter = document.createElement('div');

  divmatter.innerHTML = `
  <div class="matter">
        <div class="header-matter">
          <h1>${matter.namematter}</h1>
          <button onclick="openModal()"> Adicionar Conteúdo Estudado</button>
        </div>

            <div class="divTable">
                <table>
                  <thead>
                    <tr>
                      <th>Conteúdo</th>
                      <th>Nota</th>
                      <th class="acao">Editar</th>
                      <th class="acao">Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
          
      </div>
  `
  tmatters.appendChild(divmatter)
}











//function AddTopic(){var inputcontent = document.querySelector("#content");var content = inputcontent.value;var inputnoteHits = document.querySelector("#noteHits");var noteHits = inputnoteHits.value;var inputnoteAll = document.querySelector("#noteAll");var noteAll = inputnoteAll.value;var divFather= ('#content-note')var porcentAll = noteHits/noteAll;var porcentHits = (porcentAll*100).toFixed(2);if(porcentHits < 70){var abstract = "<p>" + "Conteúdo: " + content + " " + "Nota: " + porcentHits + "% - Revisar" + "</p>";document.getElementById("conteúdo-note").innerHTML = abstract;}else if( noteAll/noteHits == noteAll/(noteAll/2) ){var abstract = "<p>" + "Conteúdo: " + content + " " + "Nota: " + porcentHits +"%" + "</p>";document.getElementById("conteúdo-note").innerHTML = abstract;}else {var abstract = "<p>" + "Conteúdo: " + content + " " + "Nota: " + porcentHits +"%" + "</p>";document.getElementById("conteúdo-note").innerHTML = abstract;}clear()//}











