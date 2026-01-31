let enquiries = [];

function addEnquiry() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const program = document.getElementById("program").value;

    if (!name || !email || !program) {
        alert("Please fill all fields");
        return;
    }

    enquiries.push({
        name,
        email,
        program,
        status: "New"
    });

    clearForm();
    renderTable();
}

function renderTable() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    enquiries.forEach((enquiry, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${enquiry.name}</td>
            <td>${enquiry.email}</td>
            <td>${enquiry.program}</td>
            <td>${enquiry.status}</td>
            <td>
                <button class="action-btn" onclick="updateStatus(${index})">Update</button>
                <button class="action-btn" onclick="deleteEnquiry(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function updateStatus(index) {
    enquiries[index].status =
        enquiries[index].status === "New" ? "Contacted" : "Resolved";
    renderTable();
}

function deleteEnquiry(index) {
    enquiries.splice(index, 1);
    renderTable();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("program").value = "";
}
