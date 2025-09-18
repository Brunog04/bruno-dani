import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  lista_opcoes: any[] = ['Home','Linha do Tempo','Viagens'];
  
}
