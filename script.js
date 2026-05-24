fetch("data.json")
.then(r => r.json())
.then(data => {

let start = new Date(data.start_date);
let employees = data.employees;

let table = document.getElementById("planning");

for (let i = 0; i < 52; i++) {

let d = new Date(start);
d.setDate(start.getDate() + i * 7);

let person = employees[i % employees.length];

table.innerHTML += `
<tr>
<td>${d.toISOString().split("T")[0]}</td>
<td>${person}</td>
</tr>
`;

}

});