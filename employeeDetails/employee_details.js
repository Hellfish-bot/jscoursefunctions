// DEFINING VARIABLES AND FUNCTIONS

// Initialise the employees array object. Initialize it with key value pairs as follows:

// Add employee's specialization:

const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    //... More employee records can be added here
  ];

// Create the displayEmployees() function to display employees details:

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Create the calculateTotalSalaries() function to calculate employee's total salaries:

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
        alert(`Total Salaries: $${totalSalaries}`);
}

// Create displayHREmployees() function to display employees details based on department such as the HR department:

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Create findEmployeeById() function to display employee's details based on ID:

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}

// Create findByEmployeeSpecialization() function to display employee's details based on their specialization:

function findEmployeeBySpecialization(employeeSpecialization) {
    const foundSpecialization = employees.find(employee => employee.specialization === employeeSpecialization);
    if (foundSpecialization) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundSpecialization.id}: ${foundSpecialization.name}: ${foundSpecialization.name} - ${foundSpecialization.department} - ${foundSpecialization.specialization}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'No employee had been found with this Specialization';
    }
}