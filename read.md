# Lista de Tarefas (ToDo)

Projeto simples em HTML, CSS e JavaScript que implementa uma lista de tarefas interativa.

## Estrutura do projeto

- `index.html`: layout da aplicação
- `CSS/style.css`: estilos visuais
- `JS/script.js`: lógica de manipulação das tarefas

## Funcionalidades

- Adicionar tarefa
- Validar tarefa:
  - não aceita texto vazio
  - mínimo 4 caracteres
- Editar tarefa (clique no texto da tarefa, edite no input e envie)
- Excluir tarefa
- Mensagens de erro exibidas ao usuário

## Uso

1. Abra `index.html` no navegador.
2. Digite uma tarefa no campo e clique em "Adicionar".
3. Clique em uma tarefa para editar.
4. Clique em "Excluir" para remover.

## Observações

- Tarefas não persistem (refresh limpa a lista).
- Pode ser usado como base para adicionar localStorage, remoção em massa, filtros, etc.
