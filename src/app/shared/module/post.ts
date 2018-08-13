export class Post {

    static fromJsonList(array): Post[] {
      return array.map(Post.fromArray);
    }
  
    static fromArray({$key, post_title, post_body, date, user, is_page, slug}): Post {
      return new Post($key, post_title, post_body, date, user, is_page, slug);
    }
  
    constructor(
      public $key: string,
      public post_title: string,
      public post_body: string,
      public date: string,
      public user: string,
      public slug: string,
      public is_page : boolean
    ) {}
  }