import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from '../pregunta3/comment';

@Injectable({

  providedIn: 'root'

})

export class CommentService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  postCommentWithGarfield(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl).pipe(
      map((comments) => comments.filter((comment) => comment.email.includes('@garfield.biz')))
    );
  }
}
