const form = document.querySelector('form');
const sub = document.querySelector('.sub');
const table = document.querySelector('table');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const showMore = document.querySelector('.show-more');



sub.addEventListener('click', submit)
table.addEventListener('click', del)


close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
    if (e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});

function generateTable() {
    const formItem = form.item.value.trim();
    const formAmount = form.amount.value.trim();
    const formDate = form.date.value;
    const formNote = form.note.value.trim();
    const row = table.insertRow(1);
    const items = [{
        id: Math.floor(Math.random() * 1000000),
        item: formItem,
        date: formDate,
        amount: formAmount,
        note: formNote
    }];


    items.forEach(item => {
                let slice = item.note.slice(0, 10);
                row.setAttribute('data-id', item.id);
                let html = `
                    <td>${item.item}</td>
                    <td>${item.date}</td>
                    <td>${item.amount}</td>
                    <td>${item.note.length > 10 ? `${slice} <span class="more" >...read more </span>` : item.note} </td>
                    <td class="delete">Delete</td>`;
                    row.innerHTML += html;
        table.addEventListener('click', e => {
            const target = e.target;
            if ( target.classList.contains('more') && target.parentElement.parentElement.getAttribute('data-id')=== row.getAttribute('data-id') ){
            showMore.innerText = item.note;
            popup.style.display = 'block';
            }
        });
    });
}


function submit(e) {
    e.preventDefault();
    const formItem = form.item.value.trim();
    const formAmount = form.amount.value.trim();
    const formDate = form.date.value;
    const formNote = form.note.value.trim();

    if (formNote && formAmount && formDate && formItem) {
        generateTable()
        form.reset();
    } else {
        alert('please fill al the fomrs below ')
    }
}

function del(e) {
    const target = e.target;
    if (target.classList.contains('delete')) {
        target.parentElement.remove();
    }
}