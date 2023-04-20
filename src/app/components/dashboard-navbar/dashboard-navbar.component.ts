import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) {}


}
