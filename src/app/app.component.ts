import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  constructor(private dataStorageService: DataStorageService) {}

  // Inject Data Storage Service to
  // Fetch Posts from data.JSON file
  ngOnInit() {
    this.dataStorageService.getPostsJSON();
  }
}
