function renderTodos(todos, filter = "all") {
    const list = document.getElementById("list");
    const counter = document.getElementById("counter");

    list.innerHTML = "";

    let filtered = todos;

    if (filter === "completed") {
        filtered = todos.filter(t => t.completed);
    } else if (filter === "pending") {
        filtered = todos.filter(t => !t.completed);
    }

    counter.textContent = `${filtered.length} tareas`;

    filtered.forEach((todo, index) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.setAttribute("draggable", true);
        col.dataset.index = index;

        col.innerHTML = `
            <div class="card-todo ${todo.completed ? "completed" : ""}">
                <h5>${todo.title}</h5>
                <p>${todo.description}</p>

                <div class="d-flex justify-content-between align-items-center mt-3">
                    <input type="checkbox" class="check" data-index="${index}" ${todo.completed ? "checked" : ""}>

                    <div>
                        <button class="btn btn-primary btn-sm edit" data-index="${index}">
                            <i class="fa fa-pencil"></i>
                        </button>
                        <button class="btn btn-danger btn-sm delete" data-index="${index}">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        col.style.animation = "fadeIn 0.3s ease";

        list.appendChild(col);
    });
}