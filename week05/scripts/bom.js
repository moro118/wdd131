const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', function() {
  const value = input.value.trim();
  if (value !== '') {
    chaptersArray.push(value);
    setChapterList();
    displayList(value);
    input.value = '';
    input.focus();
  } else {
    input.focus();
  }
});

function displayList(item) {
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  li.textContent = item;
  deleteBtn.textContent = '❌';
  li.append(deleteBtn);
  list.append(li);

  deleteBtn.addEventListener('click', function() {
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  const raw = localStorage.getItem('myFavBOMList');
  return raw ? JSON.parse(raw) : [];
}

function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}