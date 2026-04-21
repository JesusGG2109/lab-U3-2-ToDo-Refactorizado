const btnAdd = document.getElementById("add");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");

let todos = getTodos();

function renderTodos() {
    const table = document.querySelector("#table tbody");
    table.innerHTML = "";

    todos.forEach((todo, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class="text-center">
                <input type="checkbox" class="check" data-index="${index}" ${todo.completed ? "checked" : ""}>
            </td>
            <td class="text-right">
                <button class="btn btn-danger delete" data-index="${index}">
                    X
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}

renderTodos();

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
    renderTodos();

    titleInput.value = "";
    descInput.value = "";
});

document.querySelector("#table").addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")) {
        const index = e.target.dataset.index;

        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos();
    }

    if (e.target.classList.contains("check")) {
        const index = e.target.dataset.index;

        todos[index].completed = e.target.checked;
        saveTodos(todos);
    }
});