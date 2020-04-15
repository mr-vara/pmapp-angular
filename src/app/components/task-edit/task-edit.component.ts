import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  currentTask = null;
  message = '';
  projectId = '';
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private util: UtilService) { }

    ngOnInit() {
      this.message = '';
      this.projectId = this.route.snapshot.params["id"];
      this.getTask(this.route.snapshot.params["taskId"]);
    }
  
    getTask(id) {
      this.taskService.get(id)
        .subscribe(
          data => {
            delete data["sub_tasks"];
            this.currentTask = data;
          },
          error => {
            console.log(error);
          });
    }
  
    updateTask() {
      this.taskService.update(this.currentTask.id, this.currentTask)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The task was updated successfully!';
            this.util.openSnackBar(this.message);
            this.router.navigate(['/project/'+this.currentTask.project+'/task/'+this.currentTask.id]);
          },
          error => {
            console.log(error);
          });
    }
  
    deleteTask() {
      this.taskService.delete(this.currentTask.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/project/'+this.projectId]);
          },
          error => {
            console.log(error);
          });
    }
  }  
