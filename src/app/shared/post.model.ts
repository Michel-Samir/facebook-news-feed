export class Post {
    // Post Model (Post Properties)
    constructor(private personName: string,
                private personImage: string,
                private postText: string,
                private postType?: string,
                private postImageOrVideo?: string,
    ) {}   
}