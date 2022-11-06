// section
const listSection = document.querySelector('.list-section');


// input
const mainInput = document.getElementById('main-input');


// button
const mainBtn = document.querySelector('.add-btn');



mainBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    // current date and time in France
    let today = new Date().toLocaleString('fr-FR');
    // let today = new Date();
    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // let yyyy = today.getFullYear();
    // let time = new Date().toJSON();
    // // .slice(12, 17);
    // console.log(time)
    // today = `${time}  ${dd}-${mm}-${yyyy}`;
    // document.write(today);

    const todolistContent = mainInput.value;
    console.log(todolistContent);

    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container', 'd-flex');

    
    // contentwrap has date, label div
    const contentWrap = document.createElement('div');
    contentWrap.classList.add('content-wrap', 'd-flex', 'flex-column');

    const date = document.createElement('div');
    date.classList.add('list-date');
    date.textContent = today;

    const label = document.createElement('span');
    label.classList.add('list-label');
    label.textContent = todolistContent;


    contentWrap.append(date);
    contentWrap.append(label);

    // edit div has two icons
    const editDiv = document.createElement('div');
    editDiv.classList.add('edit', 'd-flex', 'flex-column');
    const editIcon = document.createElement('span');
    editIcon.classList.add('fa-solid', 'fa-pencil')
    const confirmIcon = document.createElement('span');
    confirmIcon.classList.add('fa-sharp', 'fa-solid', 'fa-circle-check')
    editDiv.append(editIcon);
    editDiv.append(confirmIcon);

    // list container append two divs
    listContainer.append(contentWrap);
    listContainer.append(editDiv);
    listSection.append(listContainer);

    mainInput.value = '';
});