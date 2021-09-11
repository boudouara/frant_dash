import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Template } from '../model/template';
import { MatTableDataSource } from '@angular/material/table';
import { Entity } from '../model/entity';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})

export class TemplatesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TemplatesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    this.dialogRef.updateSize('40%');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

