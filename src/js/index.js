// fuções a serem executadas automaticamente a carregar a página
window.onload = function() {
 
}

function newProjectWeb() {
  window.location.replace('src/www/editor-web.html');

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

// carregando um arquivo
function openArq() {
  const inputFile = document.getElementById("inputFile");
  //simula um click no input file que está oculto
  inputFile.click();
    inputFile.addEventListener("change", () => {
      const file = inputFile.files[0];
      const fileName = inputFile.files[0].name;
      const reader = new FileReader();
      reader.onload = (event) => {
      const content = event.target.result;
      localStorage.setItem('PCE-arquivo-conteudo', content);
      localStorage.setItem('PCE-arquivo-nome', fileName);
        if(fileName.includes('.js') || fileName.includes('.json')) {
          //redireciona para o editor especifico para js, json
          window.location.replace('src/www/editor-js.html');
        }else{
          window.location.replace('src/www/editor-web.html');
        }
  };
    reader.readAsText(file);
  });
}

// função para deixar am tela cheia
function fullscreen() {
  const element = document.documentElement;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) { 
    /* Safari */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { 
    /* IE11 */
    element.msRequestFullscreen();
  } 
}
