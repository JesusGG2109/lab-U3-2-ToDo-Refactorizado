function renderTodos(todos) {
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
                <button class="btn btn-primary edit" data-index="${index}">
                    <i class="fa fa-pencil"></i>
                </button>

                <button class="btn btn-danger delete" data-index="${index}">
                 X
                </button>
            </td>`;

        table.appendChild(row);
    });
}