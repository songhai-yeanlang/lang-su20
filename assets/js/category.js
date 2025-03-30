document.addEventListener("DOMContentLoaded", function () {
    const gategoriesForm = document.getElementById("Gategories-form");
    const gategoriesList = document.getElementById("Gategories-list");
    const submitBtn = document.getElementById("submit-btn");
    const editingIndex = document.getElementById("editing-index");

    function loadGategories() {
        let gategories = JSON.parse(localStorage.getItem("gategories")) || [];
        gategoriesList.innerHTML = "";

        gategories.forEach((cat, index) => {
            document.getElementById('idGategoty').innerHTML=(index + 1).toString().padStart(2,'0')
            let row = `<tr>
                <td>${(index + 1).toString().padStart(3, "0")}</td>
                <td>${cat.name}</td>
                <td>${cat.position}</td>
                <td>${cat.hireDate}</td>
                <td>
                    <button class='btn btn-primary btn-sm w-25 h-25' onclick='editGategories(${index})'>Edit</button>
                    <button class='btn btn-danger btn-sm w-25 h-25' onclick='deleteGategories(${index})'>Delete</button>
                </td>
            </tr>`;
            gategoriesList.innerHTML += row;
        });
    }

    function saveGategories(e) {
        e.preventDefault();
        let name = document.getElementById("Gategories-name").value;
        let position = document.getElementById("Gategories-position").value;
        let hireDate = document.getElementById("Gategories-hiredate").value;
        let gategories = JSON.parse(localStorage.getItem("gategories")) || [];
        
        if (editingIndex.value === "") {
            gategories.push({ name, position, hireDate });
        } else {
            gategories[editingIndex.value] = { name, position, hireDate };
            editingIndex.value = "";
            submitBtn.textContent = "Add Gategories";
        }

        localStorage.setItem("gategories", JSON.stringify(gategories));
        gategoriesForm.reset();
        loadGategories();
    }

    window.editGategories = function (index) {
        let gategories = JSON.parse(localStorage.getItem("gategories")) || [];
        document.getElementById("Gategories-name").value = gategories[index].name;
        document.getElementById("Gategories-position").value = gategories[index].position;
        document.getElementById("Gategories-hiredate").value = gategories[index].hireDate;
        editingIndex.value = index;
        submitBtn.textContent = "Update Gategories";
    }

    window.deleteGategories = function (index) {
        let gategories = JSON.parse(localStorage.getItem("gategories")) || [];
        gategories.splice(index, 1);
        localStorage.setItem("gategories", JSON.stringify(gategories));
        loadGategories();
    }

    gategoriesForm.addEventListener("submit", saveGategories);
    loadGategories();
});