window.loadTaskData = async function (taskID) {
    try {
        const response = await fetch("https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json");
        const data = await response.json();
        
        // Find the task by ID
        const task = data.tasks.find(t => t.task_id === taskID);

        if (task) {
            renderTask(task);
        } else {
            console.error("Task not found!");
        }
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
}

// Example rendering function
function renderTask(task) {
    const taskContainer = document.getElementById('task-details');

    if (taskContainer) {
        taskContainer.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
            <ul>
                ${task.subtasks.map(subtask => `<li>${subtask}</li>`).join('')}
            </ul>
        `;
    } else {
        console.error("Task container element not found!");
    }
}
