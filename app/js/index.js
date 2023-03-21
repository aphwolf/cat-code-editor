// fuções a serem executadas automaticamente a carregar a página
window.onload = function() {
 
  setInterval(nextImage, 5000);

}

function nextImage() {
  
  let index = 0;
  const images = document.getElementById('sec1-banner')
  const frases = document.getElementById('sec1-frase')
  images.src = "app/images/_C__Users_Leo_Documents_phoenix_phoenix-code-editor_app_editor.html.png";
  frases.innerText = "Não troco o Phoenix Code Editor por nada! Além de ser super eficiente, ele ainda salva todos os arquivos em um prático arquivo zip."

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