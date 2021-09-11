import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-setupdash',
  templateUrl: './setupdash.component.html',
  styleUrls: ['./setupdash.component.scss']
})
export class SetupdashComponent implements OnInit {

  title = 'business-manager-frontend';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }


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
