import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './angular-material/material.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DAWII_CL3_QuerevaluCherreMariaIsabel';
  showBienvenidoMessage = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.showBienvenidoMessage = event.url === '/';
      }
    });
  }

  goToPregunta02() {
    this.router.navigate(['/pregunta02']);
  }

  goToPregunta03() {
    this.router.navigate(['/pregunta03']);
  }

}
