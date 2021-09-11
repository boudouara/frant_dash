import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updateentity',
  templateUrl: './updateentity.component.html',
  styleUrls: ['./updateentity.component.scss']
})
export class UpdateentityComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateentityComponent>,
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
