document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("#formTarefa");
  const input = document.querySelector("#inputTarefa");
  const mensagemErro = document.querySelector("#mensagemErro");
  const lista = document.querySelector("#listaTarefas");

  const tarefas = [];
  let editandoIndex = null;

  function validarTarefa(texto) {
    const t = texto.trim();

    if (t === "") {
      return "A tarefa não pode estar vazia.";
    }

    if (t.length <= 3) {
      return "Erro: a tarefa deve ter mais de 3 caracteres.";
    }

    return "";
  }

  function renderTarefas() {
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = tarefa;

      // EDITAR
      span.addEventListener("click", () => {
        input.value = tarefa;
        input.focus();
        editandoIndex = index;

        mensagemErro.textContent =
          "Editando item " + (index + 1) + " (envie para salvar)";
      });

      // EXCLUIR
      const btnExcluir = document.createElement("button");
      btnExcluir.type = "button";
      btnExcluir.textContent = "Excluir";

      btnExcluir.addEventListener("click", () => {
        tarefas.splice(index, 1);
        renderTarefas();
      });

      li.append(span, " ", btnExcluir);
      lista.append(li);
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const textoDigitado = input.value;
    const erroValidacao = validarTarefa(textoDigitado);

    if (erroValidacao !== "") {
      mensagemErro.textContent = erroValidacao;
      mensagemErro.style.color = "red";
      return;
    }

    const textoFinal = textoDigitado.trim();

    mensagemErro.textContent = "";
    mensagemErro.style.color = "";

    if (editandoIndex !== null) {
      tarefas[editandoIndex] = textoFinal;
      editandoIndex = null;
    } else {
      tarefas.push(textoFinal);
    }

    renderTarefas();

    input.value = "";
    input.focus();
  });

  // Limpa erro enquanto digita
  input.addEventListener("input", function () {
    if (input.value.trim().length > 3) {
      mensagemErro.textContent = "";
      mensagemErro.style.color = "";
    }
  });

});