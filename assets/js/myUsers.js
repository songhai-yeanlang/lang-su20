document.addEventListener("DOMContentLoaded", function () {
    const usersForm = document.getElementById("myUsers-form");
    const usersList = document.getElementById("myUsers-list");
    const submitBtn = document.getElementById("submit-btn");
    const editingIndex = document.getElementById("editing-index");

    function loadUsers() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        usersList.innerHTML = "";
        users.forEach((user, index) => {
            document.getElementById('idMyUser').innerHTML=(index + 1).toString().padStart(2,'0')
            let row = `<tr>
        
                <td>${(index + 1).toString().padStart(3, "0")}</td>
                <td>${user.name}</td>
                <td>${user.position}</td>
                <td>${user.hireDate}</td>
                <td>
                    <button class='btn btn-primary btn-sm w-25 h-25' onclick='editUser(${index})'>Edit</button>
                    <button class='btn btn-danger btn-sm w-25 h-25' onclick='deleteUser(${index})'>Delete</button>
                </td>
            </tr>`;
            usersList.innerHTML += row;
        });
    }

    function saveUser(e) {
        e.preventDefault();
        let name = document.getElementById("myUsers-name").value;
        let position = document.getElementById("myUsers-position").value;
        let hireDate = document.getElementById("myUsers-hiredate").value;
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        if (editingIndex.value === "") {
            users.push({ name, position, hireDate });
        } else {
            users[editingIndex.value] = { name, position, hireDate };
            editingIndex.value = "";
            submitBtn.textContent = "Add myUsers";
        }

        localStorage.setItem("users", JSON.stringify(users));
        usersForm.reset();
        loadUsers();
    }

    window.editUser = function (index) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        document.getElementById("myUsers-name").value = users[index].name;
        document.getElementById("myUsers-position").value = users[index].position;
        document.getElementById("myUsers-hiredate").value = users[index].hireDate;
        editingIndex.value = index;
        submitBtn.textContent = "Update myUsers";
    }

    window.deleteUser = function (index) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        loadUsers();
    }

    usersForm.addEventListener("submit", saveUser);
    loadUsers();
});
