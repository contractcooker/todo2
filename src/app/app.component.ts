import { Component } from '@angular/core';
import { Todo } from './interfaces/todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tom\'s Todo List';
  todos:Todo[] = [
    {task:"test1", completed:false},
  ]
  filteredTodos:Todo[] = [];
  newTask:string = "";
  newCompleted:boolean = false;

  addTask(ev:Event) {
    this.todos.push({task:this.newTask, completed:this.newCompleted});
    this.filteredTodos=[];
    this.newTask="";
  }

  completeTask(){
    return true;
  }
  
  deleteTask(index) {
    
    
    this.todos.splice(index, 1);
    
  }

  editTask(index) {
    
    this.newTask=this.todos[index].task;
    this.todos.splice(index, 1);
    
  }

  editFilteredTask(index) {
    
    this.newTask=this.filteredTodos[index].task;
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].task.match(this.filteredTodos[index].task))
      this.todos.splice(i, 1);
    }
    this.filteredTodos = [];
    
  }

  deleteSelectedTasks() {
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
        
      }
    }
  }
  filterTasks(string){
    
    this.filteredTodos = []
    for(var i=0; i < (this.todos.length); i++) {
      if(this.todos[i].task.includes(string)) {
        this.filteredTodos.push(this.todos[i])
      }
    }
  }
  
}
