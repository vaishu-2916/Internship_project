const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const pendingList = document.getElementById('pending-list');
const completedList = document.getElementById('completed-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = createTaskElement(taskText, false);
    pendingList.appendChild(taskItem);

    newTaskInput.value = '';
}

function createTaskElement(taskText, isCompleted) {
    const li = document.createElement('li');
    const taskDescription = document.createElement('span');
    taskDescription.textContent = taskText;
    
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.innerHTML = `Added on: ${new Date().toLocaleString()}`;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = isCompleted ? 'Revert' : 'Complete';
    completeBtn.addEventListener('click', () => {
        if (isCompleted) {
            pendingList.appendChild(li);
            completeBtn.textContent = 'Complete';
            taskDetails.innerHTML = `Reverted on: ${new Date().toLocaleString()}`;
        } else {
            completedList.appendChild(li);
            completeBtn.textContent = 'Revert';
            taskDetails.innerHTML = `Completed on: ${new Date().toLocaleString()}`;
        }
        isCompleted = !isCompleted;
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(taskDescription);
    li.appendChild(taskDetails);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}
