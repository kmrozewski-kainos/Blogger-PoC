import {Injectable} from "@angular/core";
import {Post} from "../models/post.model";
import {User} from "../models/user.model";
import {UserType} from "../models/user-type.model";

@Injectable()
export class PostsService {

  private posts = this.genPosts();

  private genPosts() {
    let content = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    let author = new User("b.cantpronounce", "Britishname Cantpronounce", new Date(), UserType.Author);
    let post1 = new Post(1, "First post", new Date(), content, author);
    let post2 = new Post(2, "Second post", new Date(), content, author);
    let post3 = new Post(3, "Happy New Year", new Date(), content, author);

    return [post1, post2, post3];
  }

  get() {
    return this.posts;
  }

  getById(id: number): Post {
    const found = this.posts.filter(post => post.id === id);
    return found[0];
  }

  add(post: Post) {
    this.posts.push(post);
  }
}
