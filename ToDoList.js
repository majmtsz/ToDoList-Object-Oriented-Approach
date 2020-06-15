class ToDoList {
    constructor(...tasks) {

        this.input = document.querySelector('form > input');
        this.addButton = document.querySelector('form > button').addEventListener('click', this.addTask.bind(this));
        this.searchInput = document.getElementsByClassName('searchInput');

        let _tasks = tasks;
        this.getAllTasks = () => _tasks

        this.removeTask = (taskID) => {
            _tasks = _tasks.filter(task => task.id != taskID)
            Render.render(_tasks)
            if (this.searchInput[0]) {
                this.searchInput[0].value = '';
            }
            return _tasks
        }

        this.search = (word) => {
            let result = _tasks.filter(task => task.value.includes(word))
            return Render.render(result)
        }

        this.addTaskToList = (task) => {
            return _tasks.push(task)
        }

        Render.render(_tasks)

    }
    addTask = function (event) {
        event.preventDefault();
        const taskValue = this.input.value;
        console.log(this);
        if (this.searchInput[0]) {
            this.searchInput[0].value = '';
        }
        if (taskValue !== '') {
            const taskId = this.getAllTasks().length;
            const task = new Task(taskValue, taskId);
            this.addTaskToList(task);
            Render.render(this.getAllTasks())
        } else {
            alert('Podaj treść zadania...')
        }
    }
}