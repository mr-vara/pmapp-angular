import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  currentTask = null;
  project = null;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private util: UtilService) { }

  ngOnInit() {
    this.getTask(this.route.snapshot.params["taskId"]);
  }

  getTask(id) {
    this.taskService.get(id)
      .subscribe(
        data => {
          this.currentTask = data;
          console.log(data);
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
          this.util.openSnackBar("Task Deleted.");
          this.router.navigate(['/project/'+this.currentTask.project]);
        },
        error => {
          console.log(error);
        });
  }
}
