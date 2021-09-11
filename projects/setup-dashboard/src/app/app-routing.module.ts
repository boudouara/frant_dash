import { HelpComponent } from './help/help.component';
import { SettingComponent } from './setting/setting.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './form/editor/editor.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { EntitiesComponent } from './entities/entities.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  { path: "", component: SidebarComponent, outlet: "sidebar" },
  { path: "", component: FirstpageComponent, data: { title: 'Dashboard' } },
  { path: "users", component: UsermanagementComponent, data: { title: 'User Management' } },
  { path: "entities", component: EntitiesComponent, data: { title: 'Entities' } },
  { path: "templates", component: TemplatesComponent, data: { title: 'Templates' } },
  { path: "templates/create", component: EditorComponent, data: { title: 'Create Template' } },
  { path: "settings", component: SettingComponent, data: { title: 'Settings' } },
  { path: "help", component: HelpComponent, data: { title: 'Help' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
