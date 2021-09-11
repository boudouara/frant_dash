import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }


  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }


  items: NbMenuItem[] = [

    {
      title: 'Dashboard',
      icon: 'home',
      link: "/",
      skipLocationChange: true,
      expanded: true,
    },
    {
      title: 'Entities',
      icon: 'book',
      link: "entities"
    },
    {
      title: 'Templates',
      icon: 'file',
      link: 'templates'
    },
    {
      title: 'Users management',
      icon: 'people',
      link: 'users'
    },
  ];

  items2: NbMenuItem[] = [

    {
      title: 'Settings',
      icon: 'settings',
      link: 'settings'

    },
    {
      title: 'Help',
      icon: 'question-mark-circle',
      link: 'help'
    },

  ];

  items3: NbMenuItem[] = [
    {
      title: 'Logout',
      icon: 'log-out',
    }
  ];
}
