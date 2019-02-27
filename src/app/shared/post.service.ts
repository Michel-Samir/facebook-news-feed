import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {

    // private post: Post[] = [
    //     new Post(1, "Michel", '/assets/images/image-2.jpg', 'Very beautiful dog','image','/assets/images/image-1.jpg'),
    //     new Post(1, "Remon", '/assets/images/image-2.jpg', 'Great! good video','video','/assets/images/image-1.jpg'),
    // ];

    // Post array
    private post: Post[] = [];

    // listen to new created Posts
    allPosts = new Subject<Post[]>();

    // Get a copy from posts
    getAllPosts() {
        return this.post.slice();
    }

    // Insert Posts from data.json to Posts array
    fetchAllPosts(post: Post[]) {
        this.post = post;
        this.allPosts.next(this.getAllPosts());
    }

    // Add new Post to Posts array
    addNewPost(post: Post) {
        this.post.push(post);
        this.allPosts.next(this.getAllPosts());
    }
}

// ../../../assets/images/image-2.jpg