import { Component, OnInit } from '@angular/core';
import { SubTaskService } from 'src/app/services/sub-task.service';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-sub-task',
  templateUrl: './add-sub-task.component.html',
  styleUrls: ['./add-sub-task.component.css']
})
export class AddSubTaskComponent implements OnInit {

  subTask = {
    task: '',
    name: '',
    description: '',
    start_date: '',
    end_date: ''
  };
  submitted = false;
  project = 0;

  constructor(private subTaskService: SubTaskService, private router: ActivatedRoute, private util: UtilService) { }

  ngOnInit() {
    this.subTask.task = this.router.snapshot.params["taskId"];
    this.project = this.router.snapshot.params["id"];
  }

  saveSubTask() {
    const subTaskData = {
      task: this.subTask.task,
      name: this.subTask.name,
      description: this.subTask.description,
      start_date: this.util.formatDate(this.subTask.start_date),
      end_date: this.util.formatDate(this.subTask.end_date)
    };

    this.subTaskService.create(subTaskData)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newSubTask() {
    this.submitted = false;
    this.subTask = {
      task: '',
      name: '',
      description: '',
      start_date: '',
      end_date: ''
    };
  }

}
