import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTaskService } from 'src/app/services/sub-task.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-sub-task-edit',
  templateUrl: './sub-task-edit.component.html',
  styleUrls: ['./sub-task-edit.component.css']
})
export class SubTaskEditComponent implements OnInit {

  currentSubTask = null;
  message = '';
  projectId = '';

  constructor(
    private subTaskService: SubTaskService,
    private route: ActivatedRoute,
    private router: Router,
    private util: UtilService) { }

    ngOnInit() {
      this.message = '';
      this.projectId = this.route.snapshot.params["id"];
      this.getSubTask(this.route.snapshot.params["subTaskId"]);
    }
  
    getSubTask(id) {
      this.subTaskService.get(id)
        .subscribe(
          data => {
            this.currentSubTask = data;
          },
          error => {
            console.log(error);
          });
    }
  
    updateSubTask() {
      this.subTaskService.update(this.currentSubTask.id, this.currentSubTask)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The task was updated successfully!';
            this.util.openSnackBar(this.message);
            this.router.navigate(['/project/'+this.projectId+'/task/'+this.currentSubTask.task+'/sub-task/'+this.currentSubTask.id]);
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
            this.router.navigate(['/project/'+this.route.snapshot.params["id"]]);
          },
          error => {
            console.log(error);
          });
    }
  }  
