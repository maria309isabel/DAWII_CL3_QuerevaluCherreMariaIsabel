import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgClass } from '@angular/common';
import { Character } from './character';
import { CharacterService } from '../services/character.service';
import { MaterialModule } from '../angular-material/material.module';

@Component({

  selector: 'app-pregunta2',
  imports: [MaterialModule, MatTableModule, MatPaginatorModule, NgClass],
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css'],
  standalone: true,

})
export class Pregunta2Component implements OnInit {

  displayedColumns: string[] = ['name', 'status', 'gender', 'species'];
  dataSource = new MatTableDataSource<Character>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {

    this.characterService.getHumanCharacters().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;

    });

  }
}
