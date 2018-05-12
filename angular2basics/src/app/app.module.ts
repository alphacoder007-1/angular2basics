import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { AttrdirComponent } from './attrdir/attrdir.component';
import { HighlightDirective } from './highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import { AboutComponent } from './about/about.component';
import { AppRouingModule } from './/app-rouing.module';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ModelformComponent } from './modelform/modelform.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    AttrdirComponent,
    HighlightDirective,
    PipeComponent,
    ReversePipe,
    AboutComponent,
    HomeComponent,
    ChildComponent,
    ParentComponent,
    MasterComponent,
    DetailComponent,
    TemplateformComponent,
    ModelformComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRouingModule, HttpModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
