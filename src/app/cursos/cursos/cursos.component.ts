import { Cursos } from './../model/cursos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] = [
    {_id: '1', nome: 'Angular', categoria:'front-end'},
    {_id: '2', nome: 'React', categoria:'front-end'}
  ];
  displayColumns = ['nome','categoria']

  constructor() { }

  ngOnInit(): void {
  }

}

