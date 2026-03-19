import { Injectable } from '@angular/core'

export interface Blog {
  title: string
  detail: string
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: Blog[] = [
    { title: 'Morning', detail: 'Morning My Friends' },
    { title: 'Travel', detail: 'I love traveling!' },
  ]
}
