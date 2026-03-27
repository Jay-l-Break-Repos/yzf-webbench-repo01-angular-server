import { Injectable } from '@angular/core'
import { Blog } from './blog'
import { BLOGS } from './mock-blogs'

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  getBlogs(): Blog[] {
    return BLOGS
  }

  getBlog(id: number): Blog | undefined {
    return BLOGS.find((blog) => blog.id === id)
  }
}
