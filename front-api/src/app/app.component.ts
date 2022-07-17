import {Component} from '@angular/core';
import {RouteNavigator} from './modules/shared/models/RouteNavigator';
import {RoutingService} from './routing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedTn';
  templateExampleOn: boolean = true;
  routesLinks: Array<RouteNavigator> = [];
  constructor(private routingService: RoutingService,
    private router: Router) {
    this.routingService.routesEmitter.subscribe((data) => {
      this.routesLinks = data;
    });
  }
  navigateTo(url: String) {
    this.router.navigate([url])
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
