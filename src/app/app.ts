import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Arsenal } from './components/arsenal/arsenal';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Experience, Arsenal, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Sai Charan Abbireddy Portfolio';
}
