import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // array of Posts
  posts: Post[] = []

  subscription: Subscription;

  constructor(private postServices: PostService) { }

  ngOnInit() {
    // Get all Posts from Post Service
    this.posts = this.postServices.getAllPosts();
    this.subscription = this.postServices.allPosts.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  // Destrop Subscription
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
