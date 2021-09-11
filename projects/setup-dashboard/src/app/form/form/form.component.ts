import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogService, NbTagComponent } from '@nebular/theme';
import { Observable } from 'rxjs';
import { RefComponent } from './ref/ref.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  urlRegEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  form!: FormGroup;
  inputs: any = [];
  items: any = {};
  submited: boolean = false;

  constructor(private http: HttpClient, private builder: FormBuilder, private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.inputs = data;
      let f: any = {};
      this.inputs.forEach((input: any) => {
        switch (input.name) {
          case "TEXT":
            f[input.id] = new FormControl("", [
              input.required ? Validators.required : this.NoValidation,
              Validators.minLength(input.min_length),
              Validators.maxLength(input.max_length)
            ]);
            break;
          case "NUMBER":
            f[input.id] = new FormControl("", [
              input.required ? Validators.required : this.NoValidation,
              Validators.min(input.min),
              Validators.max(input.max)
            ]);
            break;
          case "DROPDOWN":
            f[input.id] = new FormControl(input.multiple ? [] : "",
              input.required ? Validators.required : this.NoValidation);
            break;
          case "LIST":
            this.items[input.id] = {
              value: [],
              valid: false
            };
            break;
          case "EMAIL":
            f[input.id] = new FormControl("", [
              input.required ? Validators.required : this.NoValidation,
              Validators.email
            ]);
            break;
          case "URL":
            f[input.id] = new FormControl("", [
              input.required ? Validators.required : this.NoValidation,
              Validators.pattern(this.urlRegEx)
            ]);
            break;
          case "CHECKBOX":
            f[input.id] = false;
            break;
          case "LISTREF":
          case "REF":
            f[input.id] = new FormControl({ value: "", disabled: true }, input.required ? Validators.required : this.NoValidation);
            break;
          default:
            f[input.id] = new FormControl("", input.required ? Validators.required : this.NoValidation);
        }
      });
      this.form = this.builder.group(f);
    });
  }

  NoValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return null;
    }
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/test.json');
  }

  autoCalculate(operation: string) {
    console.log(operation);
  }

  toggle(checked: boolean, field: any) {
    this.form.patchValue({
      field: checked
    })
  }

  addItem(item: HTMLInputElement, id: string) {
    if (item.value.length > 0) {
      this.items[id].value.push(item.value);
      this.form.setControl(id, new FormControl(this.items[id].value, Validators.required));
      this.items[id].valid = true
      item.value = ""
    }
  }

  onItemRemove(itemToRemove: NbTagComponent, id: string) {
    this.items[id].value = this.items[id].value.filter((o: any) => o !== itemToRemove.text);
    this.form.setControl(id, new FormControl(this.items[id].value, Validators.required));
    if (this.items[id].value.length > 0) this.items[id].valid = true
    else this.items[id].valid = false
  }

  getData(id: string, type: string, entity: string) {
    let ref: any = {
      type: type,
      entity: entity
    }

    this.dialogService.open(RefComponent, {
      context: { ref: ref },
      closeOnBackdropClick: false
    }).onClose.subscribe(ids => {
      console.log(ids instanceof Array ? ids.toString() : ids);
      this.form.setControl(id, new FormControl({
        value: ids instanceof Array ? ids.toString() : ids,
        disabled: true
      },
        Validators.required));
    });
  }

  onSubmit() {
    this.submited = true;
    if (this.form.valid) {
      console.log(JSON.stringify(this.form.getRawValue()));
    }
  }

}
