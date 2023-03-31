  const body = document.querySelector('body');
  // Adiciona um ouvinte de eventos ao clique com o botão direito do mouse na página
  body.addEventListener('contextmenu', function(event) {
  // Previne o menu padrão do navegador de aparecer
  event.preventDefault();

   const menu = document.getElementById('menu-mouse');
   menu.style.left = event.pageX + 'px';
   menu.style.top = event.pageY + 'px';
   menu.style.display = 'grid';
   menu.style.position = 'fixed'
   body.addEventListener('click', function() {
     menu.style.display = 'none';
   });
});


// cria um novo projeto web completo
function openNewProject () {
  const fileName = 'index.html'
  const content =
   `<!DOCTYPE html>
   <html lang="en">
   <head>
      <style>
        /* Seus estilos aqui */
        body {
          background-color: white;
          font-size: 13pt;
          text-align: center;
        }
      </style>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu Projeto Web</title>
   </head>
   <body>
    <!-- Meu projeto usando o Cat Code Editor -->
    <h1>Meu Projeto</h1>
    <p> Meu projeto com Cat Code Editor </p>
     <script>
        // Suas funções aqui:
     </script>
  </body>
  </html>`;

  localStorage.setItem('CCE-arquivo-conteudo', content);
  localStorage.setItem('CCE-arquivo-nome', fileName);
  window.location.replace('src/www/editor-web.html');

}

// carregando um arquivo
function openFile () {
  const inputFile = document.getElementById("inputFile");
  //simula um click no input file que está oculto
  inputFile.click();
    inputFile.addEventListener("change", () => {
      const file = inputFile.files[0];
      const fileName = inputFile.files[0].name;
      const reader = new FileReader();
      reader.onload = (event) => {
      const content = event.target.result;
      localStorage.setItem('CCE-arquivo-conteudo', content);
      localStorage.setItem('CCE-arquivo-nome', fileName);
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

// função para deixar a aplicação em tela cheia
function fullscreen () {
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
  systemMsg("Para sair do modo tela cheia aperte F11")
}

//função que controla as menssagens do sistema
function systemMsg (msg) {
  const toast = document.querySelector(".toast")
  let timer1;
    document.querySelector(".text.text-2").innerText = msg;
    toast.classList.add("active");
    timer1 = setTimeout(() => { toast.classList.remove("active") }, 5000);
}


