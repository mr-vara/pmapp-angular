import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  currentProject = null;
  message = '';

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private util: UtilService) { }

  ngOnInit() {
    this.message = '';
    this.getProject(this.route.snapshot.params["id"]);
  }

  getProject(id) {
    this.projectService.get(id)
      .subscribe(
        data => {
          delete data['tasks'];
          delete data['avatar'];
          this.currentProject = data;
        },
        error => {
          console.log(error);
        });
  }

  updateProject() {
    this.projectService.update(this.currentProject.id, this.currentProject)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The project was updated successfully!';
          this.util.openSnackBar(this.message);
          this.router.navigate(['/project/'+this.currentProject.id]);
        },
        error => {
          console.log(error);
        });
  }

  deleteProject() {
    this.projectService.delete(this.currentProject.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/projects']);
        },
        error => {
          console.log(error);
        });
  }
}
