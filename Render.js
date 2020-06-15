class Render {
    static render(tasks) {
        this.nOfTasks = document.querySelector('h1 > span');
        this.tasks = document.querySelector('ul');
        this.input = document.querySelector('form > input');
        this.addForm = document.querySelector('form')

        this.input.value = '';
        this.tasks.innerHTML = '';
        this.nOfTasks.textContent = tasks.length;

        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.innerHTML = `${task.value}  <button class='delete'>delete</button>`;
            li.className = 'task';
            li.dataset.key = task.id;

            this.tasks.appendChild(li);
            li.addEventListener('click', (e) => {
                if (e.target.className !== 'delete') {
                    return
                } else {
                    list.removeTask(e.target.parentNode.dataset.key)
                }
            });

        })
        this.showSearchBar(tasks);
    }

    static showSearchBar(tasks) {
        this.searchForm = document.getElementsByClassName('search')

        // add searchbar if at least 1 task exists and searchForm is not already added
        if (tasks.length !== 0 && this.searchForm.length === 0) {
            const searchForm = document.createElement('form');
            searchForm.innerHTML = `<form action="">
                <input type="text" placeholder="searched phrase" class='searchInput'>
            </form>`;
            searchForm.classList.add('search');
            searchForm.addEventListener('input', (e) => {
                const searchedPhrase = e.target.value;
                console.log(list.getAllTasks());

                this.render(Search.search(list.getAllTasks(), searchedPhrase))
            })
            this.addForm.appendChild(searchForm);

        }
    }
}