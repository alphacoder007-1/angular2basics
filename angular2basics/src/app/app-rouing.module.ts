import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ChildComponent } from './child/child.component';
import { MasterComponent } from './master/master.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ModelformComponent } from './modelform/modelform.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "databinding", component: DatabindingComponent },
  { path: "directive", component: DirectiveComponent },
  { path: "pipe", component: PipeComponent },
  { path: "about/:id", component: AboutComponent },
  { path: "Inheritance", component: ChildComponent },
  { path: "Nested", component: MasterComponent },
  { path: "templateform", component: TemplateformComponent },
  { path: "modelform", component: ModelformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRouingModule { }
