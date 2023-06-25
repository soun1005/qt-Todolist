// ul container
const listContainer = document.getElementById('listContainer');

// input
const mainInput = document.getElementById('mainInput');

// button
const mainBtn = document.querySelector('.addBtn');

// current date and time in France to display posted time
let today = new Date().toLocaleString('fr-FR');

let taskArray = [];

const addTask = (e) => {
  e.preventDefault();

  const inputValue = mainInput.value;

  if (inputValue === '') {
    alert('Write something');
  } else {
    // put values in an array
    taskArray.push(inputValue);
    console.log(taskArray);

    const listWrap = document.createElement('li');
    listWrap.classList.add('listWrap');

    const contentWrap = document.createElement('div');
    contentWrap.classList.add('contentWrap');

    const labelWrap = document.createElement('div');
    labelWrap.classList.add('labelWrap');

    contentWrap.append(labelWrap);

    const listDate = document.createElement('span');
    listDate.classList.add('listDate');
    listDate.textContent = today;
    const listLabel = document.createElement('span');
    listLabel.classList.add('listLabel');
    listLabel.textContent = inputValue;

    labelWrap.append(listDate);
    labelWrap.append(listLabel);

    const imageWrap = document.createElement('div');
    imageWrap.classList.add('imageWrap');
    const closeIcon = document.createElement('img');
    closeIcon.classList.add('closeIcon');
    closeIcon.setAttribute('src', './close.png');
    closeIcon.setAttribute('alt', 'close');

    closeIcon.addEventListener('click', () => {
      listWrap.remove();
      saveData(); // Update localStorage after removing the task
    });

    imageWrap.append(closeIcon);

    listWrap.addEventListener('click', (event) => {
      listLabel.classList.toggle('checked');
      contentWrap.classList.toggle('checked');
    });

    listContainer.append(listWrap);
    listWrap.append(contentWrap);
    listWrap.append(imageWrap);

    mainInput.value = '';

    saveData(); // Update localStorage after adding the task
  }
};

mainBtn.addEventListener('click', addTask);

// Call showTask() when the page loads to display any saved tasks
window.addEventListener('DOMContentLoaded', showTask);

function saveData() {
  const tasks = Array.from(listContainer.children).map(
    (listWrap) => listWrap.innerHTML
  );
  localStorage.setItem('data', JSON.stringify(tasks));
}

function showTask() {
  const storedData = localStorage.getItem('data');

  if (storedData) {
    const tasks = JSON.parse(storedData);
    tasks.forEach((taskHTML) => {
      const listWrap = document.createElement('li');
      listWrap.classList.add('listWrap');
      listWrap.innerHTML = taskHTML;
      listContainer.appendChild(listWrap);

      const closeIcon = listWrap.querySelector('.closeIcon');
      closeIcon.addEventListener('click', () => {
        listWrap.remove();
        saveData(); // Update localStorage after removing the task
      });

      const contentWrap = listWrap.querySelector('.contentWrap');
      const listLabel = listWrap.querySelector('.listLabel');
      listWrap.addEventListener('click', (event) => {
        listLabel.classList.toggle('checked');
        contentWrap.classList.toggle('checked');
      });
    });
  }
}
