import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

    // Side Nav Element
    @Input() sideNav: any;

  ngOnInit() {
  }

  // Toggle Side Navigation for small screens
  openSidenav() {
    this.sideNav.toggle()
  }

}
