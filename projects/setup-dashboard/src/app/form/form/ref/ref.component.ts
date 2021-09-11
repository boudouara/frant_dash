import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.scss']
})
export class RefComponent implements OnInit {

  ref: any;
  ids : any;

  constructor(protected dialogRef: NbDialogRef<RefComponent>) {
    //Get Data Based on Ref Type (REF or LISTREF)
  }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close();
  }

  send(){
    this.dialogRef.close(["test", "2", "lol"]);
  }
}
