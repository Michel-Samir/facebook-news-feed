import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PostService } from './post.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private postService: PostService) {}

    // get all posts from data.json using HttpClient Service
    getPostsJSON() {
        return this.http.get('assets/data.json').subscribe(
            (post: {}) => {
                // Inject Post Service and send fetch posts to Post Array in Post Service
                this.postService.fetchAllPosts(post['post']);
            }
        );
    }
}