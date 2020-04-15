import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project = {
    name: '',
    description: '',
    duration: 0,
  };
  avatarForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder, private projectService: ProjectService) { }

  ngOnInit() {
    this.avatarForm = this.formBuilder.group({
      image: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.avatarForm.get('image').setValue(file);
    }
  }

  saveProject() {
    const formData = new FormData();
    formData.append('name', this.project.name);
    formData.append('description', this.project.description);
    formData.append('duration', this.project.duration.toString());
    formData.append('avatar', this.avatarForm.get('image').value);

    this.projectService.create(formData)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProject() {
    this.submitted = false;
    this.project = {
      name: '',
      description: '',
      duration: 0
    };
  }
}
