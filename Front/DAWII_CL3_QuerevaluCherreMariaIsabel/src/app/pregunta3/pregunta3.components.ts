import { Component, OnInit, ViewChild } from '@angular/core';
import { Comment } from './comment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommentService } from '../services/comment.service';
import { MaterialModule } from '../angular-material/material.module';



@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule, MatTableModule, MatPaginatorModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component implements OnInit {

  displayedColumns: string[] = ['name', 'email'];
  dataSource = new MatTableDataSource<Comment>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.postCommentWithGarfield().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}
