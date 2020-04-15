import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { SubTaskDetailsComponent } from './components/sub-task-details/sub-task-details.component';
import { SubTaskEditComponent } from './components/sub-task-edit/sub-task-edit.component';
import { AddSubTaskComponent } from './components/add-sub-task/add-sub-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectListComponent },
  { path: 'project/add', component: AddProjectComponent },  
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'project/:id/edit', component: ProjectEditComponent },
  { path: 'project/:id/task/add', component: AddTaskComponent },
  { path: 'project/:id/task/:taskId', component: TaskDetailsComponent },
  { path: 'project/:id/task/:taskId/edit', component: TaskEditComponent },
  { path: 'project/:id/task/:taskId/sub-task/add', component: AddSubTaskComponent },  
  { path: 'project/:id/task/:taskId/sub-task/:subTaskId', component: SubTaskDetailsComponent },
  { path: 'project/:id/task/:taskId/sub-task/:subTaskId/edit', component: SubTaskEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
