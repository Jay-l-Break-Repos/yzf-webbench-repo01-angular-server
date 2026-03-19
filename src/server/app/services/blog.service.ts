import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: Blog[] = [
    { id: 1, title: 'Morning', detail: 'Morning My Friends' },
    { id: 2, title: 'Travel', detail: 'I love traveling!' },
  ];

  getBlogs(): Blog[] {
    return this.blogs;
  }

  getBlogById(id: number): Blog | undefined {
    return this.blogs.find((blog) => blog.id === id);
  }
}
