import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbSidebarModule, NbMenuModule, NbThemeModule, NbLayoutModule, NbButtonModule, NbListModule, NbUserModule, NbActionsModule, NbSearchModule, NbInputModule, NbCardModule, NbDialogModule, NbSelectModule, NbToggleModule, NbCheckboxModule, NbTagModule, NbRadioModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { EntitiesComponent } from './entities/entities.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
//ng material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { CreateentityComponent } from './createentity/createentity.component';
import { UpdateentityComponent } from './updateentity/updateentity.component';

import { TemplatesComponent } from './templates/templates.component';
import { UpdatetemplateComponent } from './updatetemplate/updatetemplate.component';
import { EditorComponent } from './form/editor/editor.component';
import { FormComponent } from './form/form/form.component';
import { InputDetailsComponent } from './form/editor/input-details/input-details.component';
import { RefComponent } from './form/form/ref/ref.component';
import { SetupdashComponent } from './setupdash/setupdash.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { AdduserComponent } from './usermanagement/adduser/adduser.component';
import { SettingComponent } from './setting/setting.component';
import { HelpComponent } from './help/help.component';
/*** ***/
import { FileUploadModule } from 'ng2-file-upload';
import { MatSelectModule } from '@angular/material/select';
import { EdituserComponent } from './usermanagement/edituser/edituser.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditDataComponent } from 'projects/live-dashboard/src/app/edit-data/edit-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FirstpageComponent,
    EntitiesComponent,
    CreateentityComponent,
    UpdateentityComponent,
    TemplatesComponent,
    UpdatetemplateComponent,
    EditorComponent,
    FormComponent,
    InputDetailsComponent,
    RefComponent,
    SetupdashComponent,
    UsermanagementComponent,
    AdduserComponent,
    SettingComponent,
    HelpComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    //Nebular
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbListModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    //Nebular - Components
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbRadioModule,
    NbCheckboxModule,
    NbToggleModule,
    NbTagModule,
    NbDatepickerModule.forRoot(),
    NgbModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    NgbModule,
    NbUserModule,
    NbSearchModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    DragDropModule,
    HttpClientModule,
    //material
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatProgressBarModule,
    ///
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
