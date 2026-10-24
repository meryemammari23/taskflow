import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomePage } from './home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomePage ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}