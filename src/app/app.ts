import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { PlanosComponent } from './planos.component/planos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,PlanosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('primeiro-app');
}
