import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FileInputValueAccessor } from './observe-files.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DemoMaterialModule } from './material.module';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { SubTaskDetailsComponent } from './components/sub-task-details/sub-task-details.component';
import { SubTaskEditComponent } from './components/sub-task-edit/sub-task-edit.component';
import { AddSubTaskComponent } from './components/add-sub-task/add-sub-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    FileInputValueAccessor,
    ProjectEditComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    SubTaskDetailsComponent,
    SubTaskEditComponent,
    AddSubTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
