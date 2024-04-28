const form = document.querySelector("#form-agenda");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const msg = document.querySelector("#msg");

const contacts = [];
const numCtts = [];
let linhas ='';

form.addEventListener("submit", function(event){ 
  event.preventDefault();
  addRow();
  updateTable();
});

function addRow(){
  resetMsgBackground();

  if (contacts.includes(inputName.value)){
    msg.innerHTML = `O contato ${inputName.value} já existe!`;
    msg.style.backgroundColor = "black";
  } else if (numCtts.includes(parseFloat(inputPhone.value))){
    msg.innerHTML = `O telefone ${inputPhone.value} já existe!`;
    msg.style.backgroundColor = "black";
  } else if (inputPhone.value.length < 8) {
    msg.innerHTML = `O telefone deve ter pelo menos 8 digitos!`;
    msg.style.backgroundColor = "black";
  } else {
    contacts.push(inputName.value);
    numCtts.push(parseFloat(inputPhone.value));

    let linha = `<tr>`;
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputPhone.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    msg.innerHTML = "";

    clearFields();
  }
}

function resetMsgBackground() {
  msg.style.backgroundColor = "";
}

function updateTable() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = linhas;
}

function clearFields() {
  inputName.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
}