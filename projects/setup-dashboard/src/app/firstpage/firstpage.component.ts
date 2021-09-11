import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-service';
import { Observable } from 'rxjs';
import { EntitiesService } from '../services/entities-service';
import { TemplatesService } from '../services/templates-service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  usersCount!: Observable<any>;

  //Constructor
  constructor(private entitiesService: EntitiesService, private templatesService: TemplatesService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersCount = this.usersService.getModeratorsCount();
    this.usersCount.subscribe(event => console.log(event));
  }

}
