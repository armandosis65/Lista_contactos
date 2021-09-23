const CONTACT_LIST = [
  { id: '3159074602', name: 'Mia Senpai', aggregated: true },
  { id: '3228653209', name: 'Carls Satoro', aggregated: true },
  { id: '3059982713', name: 'Danny Euler', aggregated: false }
];

document.body.onload = init;

function init() {
  const form = document.getElementById("create-contact-form");
  form.addEventListener("submit", addTask);
  
  const complete = document.getElementById("complete-contact-form");
  complete.addEventListener("submit", completeTask);

  const nameDelete = document.getElementById("delete-contact-form");
  nameDelete.addEventListener("submit", deleteTask);

  loadTasksInDOM(); 
}

function loadTasksInDOM() {
  const listBody = document.getElementById("list-body");

  CONTACT_LIST.forEach(task => {
    const tr = document.createElement('tr');
    tr.className = 'list-row';
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdCompleted = document.createElement('td');

    tdId.innerText = task.id;
    tdId.className = 'list-head-item';
    tdName.innerText = task.name;
    tdName.className = 'list-head-item';
    tdCompleted.innerText = task.aggregated ? "agregado" : "sin agregar";
    tdCompleted.className = 'list-head-item';

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCompleted);

    listBody.appendChild(tr)
  });
}

function addTask(event) {
  event.preventDefault();
  const newId = document.getElementById("new-contact-id");
  const newName = document.getElementById("new-contact-name");

  const newTask = {
    id: newId.value,
    name: newName.value,
    aggregated: false
  };

CONTACT_LIST.push(newTask);
removeDOMTasks();
loadTasksInDOM();
}

function completeTask(event) {
  event.preventDefault();
  const completeId = document.getElementById("complete-contact-id")
  const newName = document.getElementById("new-contact-name");
  
  const completeTask = {
    id: completeId.value,
    name: newName.value,
    aggregated: true
  };

  CONTACT_LIST.push(completeTask);
  removeDOMTasks();
  loadTasksInDOM();
}

function deleteTask(event){
  event.preventDefault();
  const deleteId = document.getElementById("delete-contact-id");
  let newAll = false;

  CONTACT_LIST.forEach(task => {
    if(task.id == deleteId.value) {newAll = true;
      const Indice = CONTACT_LIST.indexOf(task);
      CONTACT_LIST.splice(Indice,1);
      removeDOMTasks(); 
      loadTasksInDOM();} });
}

function removeDOMTasks() {
  const listBody = document.getElementById("list-body");

  while (listBody.lastChild) {
    listBody.removeChild(listBody.lastChild);
  }
}

    get_localstorage();

  function get_localstorage(){

    if (localStorage.getItem("tareas")){
      let name = JSON.parse(localStorage.getItem("tareas"));
      console.log(name); 
    }  else{
        console.log("No hay contactos en el localstore");}  
}

save_localstorage();

function save_localstorage(){
  
localStorage.setItem("lista_contactos", JSON.stringify(CONTACT_LIST));

localStorage.setItem("iniciar", (init));

localStorage.setItem("cargar", (loadTasksInDOM));

localStorage.setItem("crear contacto", (addTask));

localStorage.setItem("agregar contacto", (completeTask));

localStorage.setItem("eliminar contacto", (deleteTask));

localStorage.setItem("remover", (removeDOMTasks));
}

