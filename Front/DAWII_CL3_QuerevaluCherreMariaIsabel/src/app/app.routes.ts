import { Routes } from '@angular/router';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.components';

export const routes: Routes = [

  { path: 'pregunta02', component: Pregunta2Component },
  { path: 'pregunta03', component: Pregunta3Component }

];
