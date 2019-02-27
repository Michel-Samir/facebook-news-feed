import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  icon: string;
}


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  //Profile Name
  name: string = 'Michel Samir';

  constructor() { }

  ngOnInit() {
  }

  // First group of features in Feature List
  features: Section[] = [
    {
      name: 'News Feed',
      icon: 'fa fa-newspaper-o',
    },
    {
      name: 'Messenger',
      icon: 'fa fa-comments',
    },
    {
      name: 'Watch',
      icon: 'fa fa-television',
    }
  ];

  // Second group of features in Feature List
  shortcuts: Section[] = [
    {
      name: 'News Feed',
      icon: 'fa fa-users',
    },
    {
      name: 'Messenger',
      icon: 'fa fa-users',
    },
    {
      name: 'Watch',
      icon: 'fa fa-users',
    }
  ];

}
