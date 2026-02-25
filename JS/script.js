document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("#formTarefa");
  const input = document.querySelector("#inputTarefa");
  const mensagemErro = document.querySelector("#mensagemErro");
  const lista = document.querySelector("#listaTarefas");

  const tarefas = [];

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

    for (const tarefa of tarefas) {
      const li = document.createElement("li");
      li.textContent = tarefa;
      lista.append(li);
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const textoDigitado = input.value;
    const erroValidacao = validarTarefa(textoDigitado);

    if (erroValidacao !== "") {
      mensagemErro.textContent = erroValidacao;
      mensagemErro.style.color = 'red';
      return;
    }

    mensagemErro.textContent = "";
    mensagemErro.style.color = '';
    tarefas.push(textoDigitado.trim());
    renderTarefas();

    input.value = "";
    input.focus();
  });

  // Limpa a mensagem de erro enquanto o usuário corrige a entrada
  input.addEventListener('input', function () {
    const t = input.value.trim();
    if (t.length > 3) {
      mensagemErro.textContent = '';
      mensagemErro.style.color = '';
    }
  });


});