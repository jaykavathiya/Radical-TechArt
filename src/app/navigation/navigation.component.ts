import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {

  ngAfterViewInit() {
    jQuery('.button-collapse').sideNav({
      closeOnClick: true
    });
  }
}
