import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "../../components/header/header.component";
import { FootballersService } from '../../services/footballers.service';

interface UserInterface {
  id:string;
  first_name:string;
  last_name:string;
  age:string;
  position:string;
  avatar:string;
  price:string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, HttpClientModule, HeaderComponent]
})
export class HomeComponent {

  users = signal<UserInterface[]>([]);

  ngOnInit() {
    fetch('/assets/footballer-data.json')
    .then(resp => resp.json())
    .then(this.users.set)
  }

}
