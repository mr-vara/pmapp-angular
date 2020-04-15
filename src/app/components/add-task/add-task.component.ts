import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task = {
    project: '',
    name: '',
    description: '',
    start_date: '',
    end_date: ''
  };
  submitted = false;

  constructor(private taskService: TaskService, private router: ActivatedRoute, private util: UtilService) { }

  ngOnInit() {
    this.task.project = this.router.snapshot.params["id"];
  }

  saveTask() {
    const taskData = {
      project: this.task.project,
      name: this.task.name,
      description: this.task.description,
      start_date: this.util.formatDate(this.task.start_date),
      end_date: this.util.formatDate(this.task.end_date)
    };

    this.taskService.create(taskData)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTask() {
    this.submitted = false;
    this.task = {
      project: this.task.project,
      name: '',
      description: '',
      start_date: '',
      end_date: ''
    };
  }

}
