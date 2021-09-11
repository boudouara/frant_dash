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

  options: any = [];
  submited: boolean = false;

  //Declarations
  entities = [
    "Session",
    "User"
  ];
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

  cancel() {
    this.dialogRef.close(this.input);
  }

  onSubmit() {
    this.submited = true;
    let valid: boolean;

    //TODO: Validate NUMBER Operation

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
