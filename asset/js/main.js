const app = new Vue ({
    el:"#app",
    data:{
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
        }
    }
})