document.addEventListener("DOMContentLoaded", function () {
    const ordersForm = document.getElementById("Orders-form");
    const ordersList = document.getElementById("Orders-list");
    const submitBtn = document.getElementById("submit-btn");
    const editingIndex = document.getElementById("editing-index");

    function loadOrders() {
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        ordersList.innerHTML = "";
        orders.forEach((order, index) => {
            document.getElementById('idOrders').innerHTML=(index + 1).toString().padStart(2,"0")
            let row = `<tr>
                <td>${(index + 1).toString().padStart(3, "0")}</td>
                <td>${order.name}</td>
                <td>${order.position}</td>
                <td>${order.hireDate}</td>
                <td>
                    <button class='btn btn-primary btn-sm w-25 h-25' onclick='editOrders(${index})'>Edit</button>
                    <button class='btn btn-danger btn-sm w-25 h-25' onclick='deleteOrders(${index})'>Delete</button>
                </td>
            </tr>`;
            ordersList.innerHTML += row;
        });
    }

    function saveOrders(e) {
        e.preventDefault();
        let name = document.getElementById("Orders-name").value;
        let position = document.getElementById("Orders-position").value;
        let hireDate = document.getElementById("Orders-hiredate").value;
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        
        if (editingIndex.value === "") {
            orders.push({ name, position, hireDate });
        } else {
            orders[editingIndex.value] = { name, position, hireDate };
            editingIndex.value = "";
            submitBtn.textContent = "Add Orders";
        }

        localStorage.setItem("orders", JSON.stringify(orders));
        ordersForm.reset();
        loadOrders();
    }

    window.editOrders = function (index) {
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        document.getElementById("Orders-name").value = orders[index].name;
        document.getElementById("Orders-position").value = orders[index].position;
        document.getElementById("Orders-hiredate").value = orders[index].hireDate;
        editingIndex.value = index;
        submitBtn.textContent = "Update Orders";
    }

    window.deleteOrders = function (index) {
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.splice(index, 1);
        localStorage.setItem("orders", JSON.stringify(orders));
        loadOrders();
    }

    ordersForm.addEventListener("submit", saveOrders);
    loadOrders();
});