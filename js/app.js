const btnAdd = document.getElementById("add");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");

let todos = getTodos();

renderTodos(todos);

btnAdd.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === "" || desc === "") {
        alert("Campos vacíos");
        return;
    }

    const newTodo = {
        title: title,
        description: desc,
        completed: false
    };

    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos);
    
    titleInput.value = "";
    descInput.value = "";
});

document.querySelector("#table").addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")) {
        const index = e.target.dataset.index;

        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos(todos);
    }

    if (e.target.classList.contains("check")) {
        const index = e.target.dataset.index;

        todos[index].completed = e.target.checked;
        saveTodos(todos);
    }

    if (e.target.closest(".edit")) {
    const index = e.target.closest(".edit").dataset.index;

    const nuevoTitulo = prompt("Nuevo título:", todos[index].title);
    const nuevaDesc = prompt("Nueva descripción:", todos[index].description);

    if (nuevoTitulo && nuevaDesc) {
        todos[index].title = nuevoTitulo;
        todos[index].description = nuevaDesc;

        saveTodos(todos);
        renderTodos(todos);
    }
}
});