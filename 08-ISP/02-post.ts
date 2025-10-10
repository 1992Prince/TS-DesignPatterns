interface Post{
    title: string;
    content: string;
}

interface Comment{
    title: string;
    content: string;
}

interface PostCreator{
    createPost(post: Post): void;
}

interface CommentCreator{
    createComment(comment: Comment): void;
}

interface PostSharer{
  sharePost(post: Post): void;
}




class Admin implements PostCreator, CommentCreator, PostSharer{

    createPost(post: Post): void {
        console.log("Admin is creating a post");
    }

    createComment(comment: Comment): void {
        console.log("Admin is creating a comment");
    }

    sharePost(post: Post): void {
        console.log("Admin is sharing a post");
    }
}

class RegularUser implements CommentCreator , PostSharer {

    createComment(comment: Comment): void {
        console.log("Regular User is creating a comment");
    }

    sharePost(post: Post): void {
        console.log("Regular User is sharing a post");
    }

}

/**
In this code, we have two clients — an Admin and a Regular User. 
The Admin can create posts, create comments, and share posts, while the Regular User can only 
create comments and share posts.

Instead of creating one big interface with all these methods — like createPost, createComment, 
and sharePost — we’ve separated them into small, focused interfaces: PostCreator, CommentCreator, 
and PostSharer.

Now, the Admin class implements all three interfaces because it needs all those features, and the 
RegularUser class only implements CommentCreator and PostSharer because it doesn’t create posts.

This shows the Interface Segregation Principle in action — each class depends only on the interfaces 
it actually uses, not on unnecessary ones.

🔥 Optional 1-line closer:

"By splitting the interfaces, we keep our design clean, flexible, and easier to maintain — no class 
is forced to implement unused methods."
 */