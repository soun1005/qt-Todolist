// // section
// const listSection = document.querySelector('.list-section');

// ul container
const listContainer = document.getElementById('listContainer');

// input
const mainInput = document.getElementById('mainInput');

// // button
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

    // <li class="listWrap">
    const listWrap = document.createElement('li');
    listWrap.classList.add('listWrap');

    // <div class="contentWrap">
    const contentWrap = document.createElement('div');
    contentWrap.classList.add('contentWrap');

    //  <img src="./circle.png" alt="circle" class="circleIcon" />
    const circleIcon = document.createElement('img');
    circleIcon.classList.add('circleIcon');
    circleIcon.setAttribute('src', './circle.png');
    circleIcon.setAttribute('alt', 'circle');

    //  <div class="labelWrap">
    const labelWrap = document.createElement('div');
    labelWrap.classList.add('labelWrap');

    contentWrap.append(circleIcon);
    contentWrap.append(labelWrap);

    // <span class="listDate">2023/6/16</span>
    // <span class="listLabel">Hug Florian</span>
    const listDate = document.createElement('span');
    listDate.classList.add('listDate');
    listDate.textContent = today;
    const listLabel = document.createElement('span');
    listLabel.classList.add('listLabel');
    listLabel.textContent = inputValue;

    labelWrap.append(listDate);
    labelWrap.append(listLabel);

    //   <div class="imageWrap">
    //   <img src="./close.png" alt="close" class="closeIcon" />
    // </div>
    const imageWrap = document.createElement('div');
    imageWrap.classList.add('imageWrap');
    const closeIcon = document.createElement('img');
    closeIcon.classList.add('closeIcon');
    closeIcon.setAttribute('src', './close.png');
    closeIcon.setAttribute('alt', 'close');
    imageWrap.append(closeIcon);

    listContainer.append(listWrap);
    listWrap.append(contentWrap);
    listWrap.append(imageWrap);
  }

  mainInput.value = '';
};

mainBtn.addEventListener('click', addTask);
