 //carregar o conteúdo de código salvo no localstorage
  window.onload = function() {
    editor.setValue(localStorage.getItem('CCE-arquivo-conteudo'))
  }

  let myWords = html5Syntax();

  // Seta as configurações do editor
  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "htmlmixed", //htmlmixed  modo composto que inclui o html, javascript e css.
    theme: "tomorrow-night-bright",
    extraKeys: { "Ctrl-Space": "autocomplete" },
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    hintOptions: {
       completeSingle: false,
       hint: myHintFunction}
  });

  // Função para sujestões de código
  function myHintFunction(editor) {
    const cursor = editor.getCursor();
    const token = editor.getTokenAt(cursor);
    const start = token.start;
    const end = cursor.ch;
    const line = cursor.line;
    const currentWord = token.string;
    const wordList = myWords.filter(function (word) {
      return word.startsWith(currentWord);
      });
        if (wordList.length > 0) {
        return {
        list: wordList,
        from: CodeMirror.Pos(line, start),
        to: CodeMirror.Pos(line, end)
      };
    }
  }

  // carregando um arquivo
  const inputFile = document.getElementById("inputFile");
  inputFile.addEventListener("change", () => {
    const file = inputFile.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      editor.setValue(content);
  };
  reader.readAsText(file);
  });

  //preview em nova janela
  function previewWindow() {
    const code = editor.getValue();
    const previewWindow = window.open("", "preview", "width=800,height=600");
    previewWindow.document.open();
    previewWindow.document.write('');
    previewWindow.document.write(code);
    previewWindow.onbeforeunload = function() {
    previewWindow.close();
    systemMsg("A Janela foi atualizada!")
   };
  }

  // Atualizar o conteúdo do iframe
  function previewIframe() {
    const code = editor.getValue();
    const iframe = document.getElementById("iframe-prev");
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
    systemMsg("O iframe foi atualizado!")
  }

  // gerar o arquivo ZIP e baixá-lo no navegador
  function gerarZip() {
    const zip = new JSZip();
    const namefile = localStorage.getItem("CCE-arquivo-nome");
    const code = editor.getValue();
      zip.file(namefile, code);
      zip.generateAsync({ type: "blob" }).then(function(blob) {
      saveAs(blob, "meu-projeto.zip");
    });
  systemMsg(`O arquivo ${namefile} foi baixado na pasta downloads!`)  
  }

  // salvar arquivo no computador
  function salvarArq() {
    const code = editor.getValue();
    const namefile = localStorage.getItem("CCE-arquivo-nome");
    const blob = new Blob([code], {type: "text/plain;charset=utf-8"});
    saveAs(blob, namefile);
    systemMsg(`O arquivo ${namefile} foi baixado na pasta downloads!`)
  }

  // salva o código editado apenas no locastorage
  function salvar() {
    systemMsg(`O arquivo foi salvo!`)
    const code = editor.getValue();
    localStorage.setItem('CCE-arquivo-conteudo', code)
  }

  // copia o texto do clipboard e cola no editor
  async function colar() {
    try {
      if (navigator.clipboard) {
      const text = await navigator.clipboard.readText();
      editor.setValue(text)
      }
    }catch (error){
      console.log("erro ao acessar o navigator.clipboard\n " + error)
    }
  }

  // copiar todo o texto do editor para o clipboard
  async function copiarTudo() {
    const text = editor.getValue();
    try {
      if(navigator.clipboard){
        await navigator.clipboard.writeText(text)
      }
    } catch (error) {  console.log("erro ao acessar o navigator.clipboard\n" + error) }
  systemMsg(`Texto copiado para o clipboard!`)
  }

  //apagar todo o código do editor
  function apagarTudo() {
    editor.setValue("");

  }

