document.getElementById("to-do-list").addEventListener('submit', function(event) {
    event.preventDefault();

    const task = document.getElementById('Task').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    const tasks = {
        task: task,
        deadline: deadline,
        priority: priority,
        category: category
    };
    

    addTask(tasks);

    this.reset();
});

function addTask(tasks) {
    const taskList = document.getElementById('tasks');

    const taskElement = document.createElement('div');
    taskElement.className = `task ${tasks.priority}`;

    taskElement.innerHTML = `
        <h3>${tasks.task} (${tasks.category})</h3>
        <p>Deadline: ${tasks.deadline}</p>
        <button onclick="completeTask(this)">Complete</button>`;

    taskList.appendChild(taskElement);

}

function completeTask(button) {
    const taskElement = document.querySelector(".task");
    const completedTasks = document.getElementById('completed-tasks');

    taskElement.classList.add('completed');
    button.remove();
    completedTasks.appendChild(taskElement);
}

function deadLine(deadline) {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const time= deadlineDate - now;

    return time> 0 && time < 24 * 60 * 60 * 1000; //this calculation converts 12 hours into milli seconds
}



