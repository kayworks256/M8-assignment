// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345, 'ZAK SMITH', 101, 'zak@email.com', 'Engineering'],
    [12346, 'JESSICA JOHNSON', 102, 'jessica@email.com', 'Administrative'],
    [12347, 'MARK WILLIAMS', 103, 'mark@email.com', 'Marketing'],
    [12348, 'FRED BROWN', 104, 'fred@email.com', 'Sales'],
    [12349, 'SALLY JONES', 105, 'sally@email.com', 'QA'],
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const stored = localStorage.getItem('employees')
if (stored) {
    employees = JSON.parse(stored)
}
// GET DOM ELEMENTS
const form = document.getElementById('addForm')
const empTable = document.getElementById('empTable')
const empTbody = empTable.querySelector('tbody')
const empCount = document.getElementById('empCount')
const idInput = document.getElementById('id')
const nameInput = document.getElementById('name')
const extInput = document.getElementById('extension')
const emailInput = document.getElementById('email');
const deptSelect = document.getElementById('department')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    const id = parseInt(idInput.value)
    const name = nameInput.value
    const ext = parseInt(extInput.value)
    const email = emailInput.value
    const dept = deptSelect.value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = [id, name, ext, email, dept]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    idInput.focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (!confirm('Are you sure you want to delete this employee?')) return

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const row = e.target.parentNode.parentNode
        const rowIndex = row.rowIndex - 1

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex, 1)

        // BUILD THE GRID
        buildGrid()
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTbody.innerHTML = ''

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (const emp of employees) {
        const [id, name, ext, email, dept] = emp
        const rowHtml = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${ext}</td>
            <td>${email}</td>
            <td>${dept}</td>
            <td><button class="btn btn-sm btn-danger">X</button></td>
        `

        const tr = document.createElement('tr')
        tr.innerHTML = rowHtml

    // BIND THE TBODY TO THE EMPLOYEE TABLE
        empTbody.appendChild(tr)
    }
    
    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
};