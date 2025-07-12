// Seleção de elementos
const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const btnAdd = document.getElementById("btn-add");

const todoList = document.getElementById("todo-list");
const inProgressList = document.getElementById("inprogress-list");
const doneList = document.getElementById("done-list");

// Status possíveis
const STATUS = {
  TODO: "todo",
  IN_PROGRESS: "inprogress",
  DONE: "done",
};

let tasks = [];

// Carrega tarefas do localStorage
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    tasks = JSON.parse(saved);
  } else {
    tasks = [];
  }
}

// Salva tarefas no localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Cria elemento visual da tarefa
function createTaskElement(task) {
  const li = document.createElement("li");
  li.classList.add("task");
  li.dataset.id = task.id;

  const titleElem = document.createElement("strong");
  titleElem.textContent = task.title;

  const descElem = document.createElement("p");
  descElem.textContent = task.description || "";
  descElem.classList.add("task-desc");

  // Botões: mover status, editar e excluir
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("task-buttons");

  // Botão mover para o próximo status
  const btnNext = document.createElement("button");
  btnNext.textContent = "→";
  btnNext.title = "Mover para o próximo status";
  btnNext.onclick = () => moveTaskForward(task.id);

  // Botão mover para o status anterior
  const btnPrev = document.createElement("button");
  btnPrev.textContent = "←";
  btnPrev.title = "Mover para o status anterior";
  btnPrev.onclick = () => moveTaskBackward(task.id);

  // Botão editar
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Editar";
  btnEdit.title = "Editar tarefa";
  btnEdit.onclick = () => editTask(task.id);

  // Botão excluir
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Excluir";
  btnDelete.title = "Excluir tarefa";
  btnDelete.classList.add("delete");
  btnDelete.onclick = () => deleteTask(task.id);

  btnContainer.appendChild(btnPrev);
  btnContainer.appendChild(btnNext);
  btnContainer.appendChild(btnEdit);
  btnContainer.appendChild(btnDelete);

  li.appendChild(titleElem);
  li.appendChild(descElem);
  li.appendChild(btnContainer);

  return li;
}

// Renderiza as tarefas nas colunas
function renderTasks() {
  todoList.innerHTML = "";
  inProgressList.innerHTML = "";
  doneList.innerHTML = "";

  tasks.forEach((task) => {
    const el = createTaskElement(task);
    switch (task.status) {
      case STATUS.TODO:
        todoList.appendChild(el);
        break;
      case STATUS.IN_PROGRESS:
        inProgressList.appendChild(el);
        break;
      case STATUS.DONE:
        doneList.appendChild(el);
        break;
    }
  });
}

// Gera ID simples
function generateId() {
  return Date.now().toString();
}

// Adiciona nova tarefa
function addTask() {
  const title = taskTitle.value.trim();
  const description = taskDesc.value.trim();

  if (!title) {
    alert("O título da tarefa não pode estar vazio!");
    return;
  }

  const newTask = {
    id: generateId(),
    title,
    description,
    status: STATUS.TODO,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  taskTitle.value = "";
  taskDesc.value = "";
}

// Deleta tarefa
function deleteTask(id) {
  if (!confirm("Deseja realmente excluir essa tarefa?")) return;

  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

// Edita tarefa
function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  const newTitle = prompt("Editar título:", task.title);
  if (newTitle === null) return; // Cancelou

  if (newTitle.trim() === "") {
    alert("O título não pode ser vazio!");
    return;
  }

  const newDesc = prompt("Editar descrição:", task.description);
  if (newDesc === null) return;

  task.title = newTitle.trim();
  task.description = newDesc.trim();

  saveTasks();
  renderTasks();
}

// Mover tarefa para o próximo status
function moveTaskForward(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  if (task.status === STATUS.TODO) task.status = STATUS.IN_PROGRESS;
  else if (task.status === STATUS.IN_PROGRESS) task.status = STATUS.DONE;

  saveTasks();
  renderTasks();
}

// Mover tarefa para o status anterior
function moveTaskBackward(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  if (task.status === STATUS.DONE) task.status = STATUS.IN_PROGRESS;
  else if (task.status === STATUS.IN_PROGRESS) task.status = STATUS.TODO;

  saveTasks();
  renderTasks();
}

// Inicialização
btnAdd.addEventListener("click", addTask);

loadTasks();
renderTasks();
