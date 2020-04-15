import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTaskService } from 'src/app/services/sub-task.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-sub-task-details',
  templateUrl: './sub-task-details.component.html',
  styleUrls: ['./sub-task-details.component.css']
})
export class SubTaskDetailsComponent implements OnInit {
  currentSubTask = null;
  project = null;

  constructor(
    private subTaskService: SubTaskService,
    private route: ActivatedRoute,
    private router: Router,
    private util: UtilService) { }

  ngOnInit() {
    this.project = this.route.snapshot.params["id"];
    this.getSubTask(this.route.snapshot.params["subTaskId"]);
  }

  getSubTask(id) {
    this.subTaskService.get(id)
      .subscribe(
        data => {
          this.currentSubTask = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteSubTask() {
    this.subTaskService.delete(this.currentSubTask.id)
      .subscribe(
        response => {
          console.log(response);
          this.util.openSnackBar("Task Deleted.");
          this.router.navigate(['/project/'+this.project+'/task/'+this.currentSubTask.task]);
        },
        error => {
          console.log(error);
        });
  }
}
