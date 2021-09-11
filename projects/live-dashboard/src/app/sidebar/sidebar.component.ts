import { entities  } from './../dummy data/dummydata';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { NbMenuItem,NbMenuService  } from '@nebular/theme';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    
   entities: any = [];
  constructor(private menuService: NbMenuService) { }

  ngOnInit(): void {
    this.entities = entities
   
  }
 
 

  items: NbMenuItem[] = [
 
    {
      title: 'Dashboard',
      icon: 'home',
      link :"/",
      pathMatch:'full',
      
      
    },
  
    
  ];


  items2: NbMenuItem[] = [
 
    {
      title: 'Settings',
      icon: 'settings',
      pathMatch:'full',
      link:'setting'
    },
    
    
  ];
  
  items3: NbMenuItem[] = [
 
    {
      title: 'Logout',
      icon: 'log-out',
      
      
    }
   
    
  ];
  

}
