/* import composant*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

/* déclaration composant*/
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {
  taskForm: FormGroup; // Formulaire react

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required], // Champ du formulaire avec validation requise
    });
  }
  ngOnInit(): void {

  }

 //Fonction du service pour ajouter une tâche dans la liste
  addTask(taskName: string) {
  this.taskService.addTask(taskName);
  }
  //Fonction à l'envoie du formulaire //
  onSubmit() {
    if (this.taskForm.invalid) {
      return;
    }

    const taskName = this.taskForm.get('taskName')?.value; // valeur du champ
    this.taskService.addTask(taskName); // Appeler la méthode pour ajouter la tâche

    // Réinitialiser le formulaire
    this.taskForm.reset();
  }

}

