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
  newTask:string = "";
  newCompleted:boolean = false;

  addTask = function(ev:Event) {
    this.todos.push({task:this.newTask, completed:this.newCompleted})
  }

  deleteTask(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTasks() {
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  completeTask = function(ev:Event){
    return true;
  }
}
