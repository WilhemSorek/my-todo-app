/* import composant*/
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
/* déclaration composant*/
@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent implements OnInit {

  constructor(
    private taskService: TaskService
  ) {}
  ngOnInit(): void {

  }
//Fonction du service pour supprimer la tâche à l'index précisée
  deleteTask(index: number) {
  this.taskService.deleteTask(index);
  }
//Retourne la liste des tâches via le service task
  getTasks() {
  return this.taskService.getTasks();
  }


}

