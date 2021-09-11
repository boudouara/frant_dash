import { SettingComponent } from './setting/setting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './form/editor/editor.component';
import { FormComponent } from './form/form/form.component';
import { entities } from './dummy data/dummydata';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { EntitiesComponent } from './entities/entities.component';


import { TemplatesComponent } from './templates/templates.component';
import { LoginComponent } from './login/login.component';
import { Entity } from './model/entity';
const routes: Routes =[
  { path: "", component: FirstpageComponent, data: { title: 'Dashboard' } },
  { path: "entity/:id", component: EntitiesComponent, data: { title:Entity.name} },
  { path: 'login', component: LoginComponent },
  { path: "form", component: FormComponent, data: { title: 'Add Entity ' } },
  { path: "editor", component: EditorComponent },
  { path: "setting", component: SettingComponent,data: { title: 'Settings ' } },
  {path: 'app1', 
  loadChildren: '../../projects/setup-dashboard/src/app/app.module'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
