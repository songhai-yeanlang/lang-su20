function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName.trim() === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }
  
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
  }
  
  function loadEmployees() {
    const employeesCookie = getCookie("employees");
    return employeesCookie ? JSON.parse(employeesCookie) : [];
  }
  
  function saveEmployees() {
    setCookie("employees", JSON.stringify(employees), 7);
  }
  
  const form = document.getElementById("employee-form");
  const nameInput = document.getElementById("employee-name");
  const positionInput = document.getElementById("employee-position");
  const hiredateInput = document.getElementById("employee-hiredate");
  const employeeList = document.getElementById("employee-list");
  const editingIndexInput = document.getElementById("editing-index");
  const submitBtn = document.getElementById("submit-btn");
  let employees = loadEmployees();
  
  function renderEmployees() {
    employeeList.innerHTML = "";
    employees.forEach((employee, index) => {
      document.getElementById('idProduct').innerHTML=(index + 1).toString().padStart(2,"0")
      employeeList.innerHTML += `
      <tr>
        <td>${(index + 1).toString().padStart(3, "0")}</td>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.hiredate}</td>
        <td>
          <button class="btn btn-primary btn-sm w-25 h-25" onclick="editEmployee(${index})">Edit</button>
          <button class="btn btn-danger btn-sm w-25 h-25" onclick="deleteEmployee(${index})">Delete</button>
        </td>
      </tr>`;
    });
  }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const position = positionInput.value.trim();
    const hiredate = hiredateInput.value.trim();
    const editingIndex = editingIndexInput.value;
  
    if (name && position && hiredate) {
      const newEmployee = { name, position, hiredate };
  
      if (editingIndex) {
        employees[editingIndex] = newEmployee;
        submitBtn.textContent = "Add Employee";
        editingIndexInput.value = "";
      } else {
        employees.push(newEmployee);
      }
  
      nameInput.value = "";
      positionInput.value = "";
      hiredateInput.value = "";
      saveEmployees();
      renderEmployees();
    }
  });
  
  window.deleteEmployee = (index) => {
    if (confirm("Are you sure you want to delete this Product?")) {
      employees.splice(index, 1);
      saveEmployees();
      renderEmployees();
    }
  };
  
  window.editEmployee = (index) => {
    const employee = employees[index];
    nameInput.value = employee.name;
    positionInput.value = employee.position;
    hiredateInput.value = employee.hiredate;
    editingIndexInput.value = index;
    submitBtn.textContent = "Update Employee";
  };
  
  renderEmployees();
  