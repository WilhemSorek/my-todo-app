import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = [];

  constructor() {}

  //Ajouter une tâche dans une liste
  addTask(task: string) {
    this.tasks.push(task);
  }

  //Supprimer une tâche dans la liste à l'emplacement précisé
  deleteTask(index: number) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
  //Renvoyer toutes le tableau avec toutes les tâches.
  getTasks(): string[] {
    return this.tasks;
  }
}
