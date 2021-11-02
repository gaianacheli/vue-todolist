const app = new Vue ({
    el:"#app",
    data:{
        error: false,
        newTask: "",
        tasks: [
            'Fare la spesa',
            'Pagare bollette',
            'Andare dal dottore',
        ],
        completed:[],
        trashed: [],


    },
    methods: {
        removeTask(task, index){
           this.trashed.push(task, index)
            this.tasks.splice(index,1)
        },
        addTask(){
            if(this.newTask.length > 5){
                this.tasks.push(this.newTask)
                this.error= false
            }else {
                this.error= true
            }
            this.newTask= ""
        },
       taskComplete(task, index){
           this.completed.push(task, index);
           this.tasks.splice(task,1) ;  
           
       },
       resumeTask(task,index){
           this.completed.splice(task,1)
          this.tasks.push(task, index) 
       },
       taskTrashed(task,index){
           this.trashed.splice(task,1)
       }
       
    }
})