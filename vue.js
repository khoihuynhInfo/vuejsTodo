var vm = new Vue({
    el: '#wrapper-todos',
    data: {
        todos: [
            { id: 1, title: 'Vuejs e f' },
            { id: 2, title: 'Vuex u g' },
            { id: 3, title: 'Vuetify n t' }
        ],
        nextTodoId: 4,
        newTodoText: ''
    },
    methods: {
        addTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
        },
        removieTodo: function (id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    },
    computed: {
        bypassTodos: function () {
            return this.todos.map(todo => {
                return { id: todo.id, title: todo.title.split(' ').join('') };
            });
        }
    }
});