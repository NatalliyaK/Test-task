const taskInput = document.querySelector('.taskInput');
const addTaskButton = document.querySelector('.addTaskButton');
const taskList = document.querySelector('.taskList');
const showTrashButton = document.querySelector('.showTrashButton');
const trashList = document.querySelector('.trashList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

showTrashButton.addEventListener('click', () => {
    trashList.classList.toggle('hidden');
});

function createTaskItem(text) {
    const taskItem = document.createElement('li');
    const taskLabel = document.createElement('label');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', () => {
        taskLabel.classList.toggle('completed');
    });
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `&times;`;
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
        trashList.appendChild(taskItem);
        deleteButton.remove();
        const restoreButton = document.createElement('button');
        restoreButton.textContent = 'Восстановить';
        restoreButton.addEventListener('click', () => {
            taskItem.remove();
            taskList.appendChild(taskItem);
            restoreButton.remove();
            taskItem.appendChild(deleteButton);
        });
        taskItem.appendChild(restoreButton);
    });
    taskLabel.textContent = text;
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    return taskItem;
}