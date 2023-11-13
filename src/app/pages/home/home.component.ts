import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  users = signal<any[]>([]);

  ngOnInit() {
    fetch('/assets/footballer-data.json')
    .then(resp => resp.json())
    .then(this.users.set)
  }

}
