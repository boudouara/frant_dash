import { Component, OnInit } from '@angular/core';
import { Template } from '../model/template';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const Templates: Array<Template> = [
  { id: 1, name: 'Template 1' },
  { id: 2, name: 'Template 2' },
  { id: 3, name: 'Template 3' },
  { id: 4, name: 'Template 4' },
  { id: 4, name: 'Template 4' },
  { id: 4, name: 'Template 4' },
];

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})

export class TemplatesComponent implements OnInit {

  items = Templates;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  Delete(name: any) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");
    }
  }
}