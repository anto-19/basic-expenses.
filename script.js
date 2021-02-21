const form = document.querySelector('form');
const sub = document.querySelector('.sub');
const table = document.querySelector('table');
const spend = document.querySelector('.spend');


sub.addEventListener('click', submit)
table.addEventListener('click', del)



function generateTable() {
    let formItem = form.item.value.trim();
    let formAmount = form.amount.value.trim();
    let formDate = form.date.value;
    let row = table.insertRow(1);

    const items = [{
        id: Math.floor(Math.random() * 1000000),
        item: formItem,
        date: formDate,
        amount: formAmount
    }]
    items.forEach(item => {
        row.setAttribute('data-id', item.id)
        let html = `
            <td>${item.item}</td>
            <td>${item.date}</td>
            <td>${item.amount}</td>
            <td class="delete">Delete</td>
            `;
        row.innerHTML += html;
    })
    return items
}


function submit(e) {
    e.preventDefault();

    if (form.item.value.trim() && form.amount.value.trim() && form.date.value) {
        generateTable()
        form.reset();
    } else {
        alert('please enter a value')
    }


}

function del(e) {
    if (e.target.className === 'delete') {
        e.target.parentElement.remove();
    }
}