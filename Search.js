class Search {
    static search(list, word) {
        const result = list.filter(task => task.value.includes(word))
        return result
    }
}