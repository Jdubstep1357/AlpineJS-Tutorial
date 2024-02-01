// REFERENCES FILE Component_Logic.html

  // taskApp is function that returns object
  let taskApp = () => {
    return { 
        tasks: [], 
        newTask: '',
        
        // Function inside of method, use this to reference up stream
        submit() {
            this.tasks.push({ body: this.newTask, completed: false }); 
            this.newTask = '';
        }
    }
}