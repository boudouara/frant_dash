import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'livadash-frontend';

  constructor(private sidebarService: NbSidebarService, private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }
  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }


  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this.activatedRoute);
      rt.data.subscribe((data: any) => {
        console.log(data);
        this.titleService.setTitle(data.title)
        this.title = data.title
      });

    });
  }
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }

}