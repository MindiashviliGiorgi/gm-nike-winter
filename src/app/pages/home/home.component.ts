import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, HttpClientModule, HeaderComponent]
})
export class HomeComponent {

  // users = signal<any[]>([]);

  // ngOnInit() {
  //   fetch('/assets/footballer-data.json')
  //   .then(resp => resp.json())
  //   .then(this.users.set)
  // }

}
