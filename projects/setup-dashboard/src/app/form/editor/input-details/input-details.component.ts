import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbTagComponent } from '@nebular/theme';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.scss']
})
export class InputDetailsComponent implements OnInit {

  form!: FormGroup;
  input: any;
  inputs: any;

  auto_calculated!: boolean;
  operation_components: any = [];
  operations: any = [];
  options: any = [];
  submited: boolean = false;

  //Declarations
  //TODO: Get Entities from Database
  entities = [
    "Session",
    "User"
  ];
  //Predefined Types
  mime_types = [
    "audio/*",
    "video/*",
    "image/*",
    ".pdf",
    ".doc, .docx",
  ];
  data_types = [
    "text",
    "number",
    "url",
    "email",
  ];

  constructor(private builder: FormBuilder, protected dialogRef: NbDialogRef<InputDetailsComponent>) {
  }

  ngOnInit(): void {
    this.form = this.builder.group(this.input);

    //Set Controls
    switch (this.input.name) {
      case "TEXT":
        this.form.setControl("min_length", new FormControl(this.input.min_length, [Validators.required, Validators.min(2)]));
        this.form.setControl("max_length", new FormControl(this.input.max_length, Validators.required));
        this.form.setControl("hint", new FormControl(this.input.hint, Validators.required));
        break;
      case "NUMBER":
        this.form.setControl("min", new FormControl(this.input.min, Validators.required));
        this.form.setControl("max", new FormControl(this.input.max, Validators.required));
        this.form.setControl("hint", new FormControl(this.input.hint, Validators.required));

        //Setup Operation Editor
        this.operations = this.input.operations;
        this.operation_components.push({
          type: "NUMBER",
          value: null,
          op: null
        });
        this.inputs.forEach((input: any) => {
          if (input.id != "")
            switch (input.name) {
              case "NUMBER":
                if (input.id != this.input.id)
                  if (this.operation_components.some((comp: any) => comp.type === "VARIABLE")) {
                    this.operation_components[this.operation_components.findIndex((comp: any) => comp.type === "VARIABLE")].
                      ids.push(input.id);
                  } else {
                    this.operation_components.push({
                      type: "VARIABLE",
                      id: null,
                      ids: [input.id],
                      op: null
                    });
                  }
                break;
              case "LIST":
                if (input.data_type == "number")
                  if (this.operation_components.some((comp: any) => comp.type === "LIST")) {
                    this.operation_components[this.operation_components.findIndex((comp: any) => comp.type === "LIST")].
                      ids.push(input.id);
                  } else {
                    this.operation_components.push({
                      type: "LIST",
                      method: null,
                      id: null,
                      ids: [input.id],
                      op: null
                    });
                  }
                break;
              case "REF":
                if (this.operation_components.some((comp: any) => comp.type === "REF")) {
                  this.operation_components[this.operation_components.findIndex((comp: any) => comp.type === "REF")].
                    ids.push(input.id);
                } else {
                  this.operation_components.push({
                    type: "REF",
                    id: null,
                    sub_id: null,
                    ids: [input.id],
                    op: null
                  });
                }
                break;
              case "LISTREF":
                if (this.operation_components.some((comp: any) => comp.type === "LISTREF")) {
                  this.operation_components[this.operation_components.findIndex((comp: any) => comp.type === "LISTREF")].
                    ids.push(input.id);
                } else {
                  this.operation_components.push({
                    type: "LISTREF",
                    method: null,
                    id: null,
                    sub_id: null,
                    ids: [input.id],
                    op: null
                  });
                }
                break;
            }
        });
        break;
      case "REF":
        this.form.setControl("entity", new FormControl(this.input.entity, Validators.required));
        break;
      case "LISTREF":
        this.form.setControl("entity", new FormControl(this.input.entity, Validators.required));
        break;
      case "LIST":
        this.form.setControl("data_type", new FormControl(this.input.data_type, Validators.required));
        break;
      case "FILE":
        this.form.setControl("mime_type", new FormControl(this.input.mime_type, Validators.required));
        break;
    }
    this.form.setControl("id", new FormControl(this.input.id, Validators.required));
    this.form.setControl("label", new FormControl(this.input.label, Validators.required));
  }

  //Options
  addOption(option: HTMLInputElement) {
    if (option.value.length > 0) {
      this.options.push(option.value)
      this.form.patchValue({
        options: this.options
      });
      option.value = ""
    }
  }

  onOptionRemove(optionToRemove: NbTagComponent) {
    this.options = this.options.filter((o: any) => o !== optionToRemove.text);
    this.form.patchValue({
      options: this.options
    });
  }

  //Operations Editor -----------------------------------------------------------
  //Drag/Drop
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  delete(index: number) {
    this.operations.splice(index, 1);
  }//Delete Operation

  variableChosen(id: any, index: number) {
    this.operations[index].id = id;
  }//Choose Variable

  methodChosen(method: any, index: number) {
    this.operations[index].method = method;
  }//Choose Method

  operationChosen(operation: any, index: number) {
    this.operations[index].op = operation;
  }//Choose Operation

  valueKeyup(ev: any, index: number) {
    this.operations[index].value = ev.target.value;
  }//Type Value

  subIdKeyup(ev: any, index: number) {
    this.operations[index].sub_id = ev.target.value;
  }//Type Value

  //Dialog Related --------------------------------------------------------
  cancel() {
    this.dialogRef.close(this.input);
  }

  onSubmit() {
    this.submited = true;
    let valid: boolean;

    //Set Operation
    this.form.setControl("operations", new FormControl(this.operations));

    //Validation
    if (this.input.name == "DROPDOWN") {
      valid = this.form.valid && this.options.length > 0;
    } else {
      valid = this.form.valid;
    }

    if (valid) {
      let input = this.form.value;
      this.dialogRef.close(input);
    }
  }

}
