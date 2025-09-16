const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        li.textContent = input.value;
        deleteBtn.textContent = '❌';
        li.append(deleteBtn);
        list.append(li);
        input.value = '';
        input.focus();
        deleteBtn.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
    } else {
        input.focus();
    }
});