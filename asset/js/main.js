const app = new Vue ({
    el:"#app",
    data:{
        newTask: "",
        tasks: [
            'Fare la spesa',
            'Pagare bollette',
            'Andare dal dottore',
        ]
    },
    methods: {
        removeTask(i){
           // console.log('rimosso',i);
            this.tasks.splice(i,1)
        },
        addTask(){
            if(this.newTask.length > 5){
                this.tasks.push(this.newTask)
            }
            this.newTask= ""
        }
    }
})