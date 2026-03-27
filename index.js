const btnAdd = document.getElementById("add");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const table = document.querySelector("#table tbody");

btnAdd.addEventListener("click", () => {

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === "" || desc === "") {
        alert("Campos vacíos");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${desc}</td>
        <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-danger">
                X
            </button>
        </td>
    `;

    table.appendChild(row);

    titleInput.value = "";
    descInput.value = "";
});