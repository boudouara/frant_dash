import { Component, OnInit, ViewChild } from '@angular/core';
import { Entity } from '../model/entity';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateentityComponent } from '../createentity/createentity.component';
import { UpdateentityComponent } from '../updateentity/updateentity.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EntitiesService } from '../services/entities-service';
import { tap } from 'rxjs/operators';

const Entites: Array<Entity> = [
  { id: 1, name: 'entity 1' },
  { id: 2, name: 'entity 2' },
  { id: 3, name: 'entity 3' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
  { id: 4, name: 'entity 4' },
];


@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {

  /**
   * receive data in this form
   * [{id: 1, entityName: "name 1"}, {id: 2, Name: "name 2"}]
   */
  entities!: Observable<any[]>

  //Data
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Entity>(Entites);
  id: any
  name!: string
  elemnt: any

  //ViewChild
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //Constructor
  constructor(private entitiesService: EntitiesService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.entities = this.entitiesService.getEntities();
    this.entities.subscribe(next => console.log("Fetched Data"))
    console.log(this.entities);
  }

  onedit(element: any) {
    this.elemnt = element
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdateentityComponent, { data: { entity: this.elemnt } })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateentityComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  Delete(name: any) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");
    }
  }
}

