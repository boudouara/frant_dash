import { NgModule,ModuleWithProviders } from '@angular/core';
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
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NbIconModule } from '@nebular/theme';
import { TemplatesComponent } from './templates/templates.component';
import { EditorComponent } from './form/editor/editor.component';
import { FormComponent } from './form/form/form.component';
import { InputDetailsComponent } from './form/editor/input-details/input-details.component';
import { RefComponent } from './form/form/ref/ref.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FirstpageComponent,
    EntitiesComponent,
    LoginComponent,
    TemplatesComponent,
    EditorComponent,
    FormComponent,
    InputDetailsComponent,
    RefComponent,
    EditDataComponent,
    SettingComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ReactiveFormsModule,
    NgbModule,
    NbUserModule,
    NbSearchModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbDialogModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbToggleModule,
    NbCheckboxModule,
    NbTagModule,
    NbRadioModule,
    NbDatepickerModule,
    DragDropModule,
    HttpClientModule,
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
    NbIconModule,

    //material
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EditDataComponent]
})
export class AppModule { }

const providers = []


