// fuções a serem executadas automaticamente a carregar a página
window.onload = function() {
 

}

// Quando o usuário clicar no botão, abra o modal
function openNewProject() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), feche o modal
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function newProjectWeb() {
  window.location.replace('app/editor-web.html');

}

function newProjectJs() {
  window.location.replace('app/editor-js.html');

}

function newProjectHtml() {
  window.location.replace('app/editor-web.html');

}

function newProjectJson() {
  window.location.replace('app/editor-web.html');

}
