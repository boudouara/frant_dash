import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent  {

  constructor(
    public dialogRef: MatDialogRef<EditDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    this.dialogRef.updateSize('40%');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onClickSubmit(data: any) {
    alert("Entered  : " + data.name);
  }

}
