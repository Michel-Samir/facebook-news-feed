import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  // Open Photo/Video Section
  openPhotosVideosSection = false;

  // FormGroup
  addPostForm: FormGroup;

  personName: string = "Michel Samir";
  personImage: string = "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/40243252_1868217356594018_5178546561046544384_n.jpg?_nc_cat=110&_nc_ht=scontent-mxp1-1.xx&oh=98ac2739a8f3a99b55a4920624f62fed&oe=5CE9F812";

  constructor(private postService: PostService) { }

  ngOnInit() {
    // Form Controls
    this.addPostForm = new FormGroup({
      'postText': new FormControl(null, Validators.required),
      'postType': new FormControl(null),
      'postImageOrVideo': new FormControl(),
    });
  }

  // Open/Close Photo/video Section
  openSection() {
    this.openPhotosVideosSection = !this.openPhotosVideosSection;
    if(!this.openPhotosVideosSection) {
      this.addPostForm.reset({
        "postType": null
      });
    }
  }


  // Submit Form
  // Add new post to Posts Array in (Post Services)
  onSubmit() {
    console.log(this.addPostForm);
    const values = this.addPostForm.value;
    console.log(this.addPostForm.value.postType)
    const newPost = new Post(this.personName, this.personImage, values.postText, values.postType, values.postImageOrVideo);
    this.postService.addNewPost(newPost);
    this.addPostForm.reset();

  }
}

