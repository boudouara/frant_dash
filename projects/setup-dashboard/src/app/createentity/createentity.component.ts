import { Component, OnInit } from '@angular/core';
import { EntitiesService } from '../services/entities-service';

@Component({
  selector: 'app-createentity',
  templateUrl: './createentity.component.html',
  styleUrls: ['./createentity.component.scss']
})
export class CreateentityComponent implements OnInit {

  constructor(private entitiesService: EntitiesService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data : any) {
 }
}
