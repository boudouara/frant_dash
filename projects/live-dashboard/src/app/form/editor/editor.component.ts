import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, copyArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { InputDetailsComponent } from './input-details/input-details.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  private _jsonURL = 'assets/predefined_inputs.json';

  //Declarations Inputs
  form!: FormGroup;
  predefined_inputs: any = [];
  inputs: any = [];

  //Form Validation
  inputs_empty: boolean = true;
  submited: boolean = false;

  constructor(private http: HttpClient, private dialogService: NbDialogService, private builder: FormBuilder) {
    this.getJSON().subscribe(data => {
      this.predefined_inputs = data;
    });

    this.form = this.builder.group({
      template_name: new FormControl("", Validators.required),
      inputs: []
    });
  }

  ngOnInit(): void {
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  //Drag/Drop
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.inputs_empty = false;
    }
  }

  //Inputs Details
  delete(index: number) {
    this.inputs.splice(index, 1);

    if (this.inputs.length > 0)
      this.inputs_empty = false;
    else
      this.inputs_empty = true;
  }

  open(input: any, index: number) {
    this.dialogService.open(InputDetailsComponent, {
      context: { input: input },
      closeOnBackdropClick: false
    }).onClose.subscribe(input => {
      console.log(input);
      this.inputs.splice(index, 1, input);
    });
  }

  onSubmit() {
    this.submited = true;
    if (this.form.valid && this.inputs.length > 0) {
      let template = {
        template_name: this.form.value.template_name,
        components: this.inputs
      }
      console.log(template);
    }
  }

}
