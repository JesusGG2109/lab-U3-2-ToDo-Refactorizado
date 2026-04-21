const btnAdd = document.getElementById("add");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");

let todos = getTodos();
let currentFilter = "all";

renderTodos(todos, currentFilter);

btnAdd.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === "" || desc === "") return;

    todos.push({
        title,
        description: desc,
        completed: false
    });

    saveTodos(todos);
    renderTodos(todos, currentFilter);

    titleInput.value = "";
    descInput.value = "";
});

document.getElementById("list").addEventListener("click", (e) => {

    const deleteBtn = e.target.closest(".delete");
    const editBtn = e.target.closest(".edit");
    const check = e.target.closest(".check");

    if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos(todos, currentFilter);
    }

    if (editBtn) {
        const index = editBtn.dataset.index;

        const nuevoTitulo = prompt("Nuevo título:", todos[index].title);
        const nuevaDesc = prompt("Nueva descripción:", todos[index].description);

        if (nuevoTitulo && nuevaDesc) {
            todos[index].title = nuevoTitulo;
            todos[index].description = nuevaDesc;
            saveTodos(todos);
            renderTodos(todos, currentFilter);
        }
    }

    if (check) {
        const index = check.dataset.index;
        todos[index].completed = check.checked;
        saveTodos(todos);
        renderTodos(todos, currentFilter);
    }
});

document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        renderTodos(todos, currentFilter);
    });
});