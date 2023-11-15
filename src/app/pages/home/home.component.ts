import { Component, OnInit, inject, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "../../components/header/header.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

interface Player {
  position: any;
  id: string;
  first_name: string;
  last_name: string;
  age: string;
  avatar: string;
  price: string;
}

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  added: boolean = false;
  yourTeam: any = [];
  http = inject(HttpClient)
  users: any;
  footballers: any;
  pageSize = 10;
  page = 1;
  existingUser: any;

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.http.get('/assets/data.json')
    .subscribe((res) => {
      this.users = res;
    })
  };

  refreshTeam() {
    localStorage.clear();
  };

  addUserInTeam(user : Player) {
    // create team array in local storage
    const team: Player[] = JSON.parse(localStorage.getItem('teamPlayers') || '[]');
    // Check if the user with the same ID already exists in the team
    const existingUser = team.find((existingUser) => existingUser.id === user.id);
    if (existingUser) {
      alert('That player is already in the team');
      return;
    }
    // add player in team
    if (team.length < 11) {
        team.push(user);
    } else {
      alert('Team is full')
      return;
    }
    // setItem to teamplayers as a team
    localStorage.setItem('teamPlayers', JSON.stringify(team));
    this.yourTeam = team;
  };

  removeFromTeam(user: Player) {
    // create team array in local storage
    const team: Player[] = JSON.parse(localStorage.getItem('teamPlayers') || '[]');
    // Find the index of the user in the team
    const index = team.findIndex((teamUser) => teamUser.id === user.id);
    if (index !== -1) {
      // Remove the user from the team
      team.splice(index, 1);
      // setItem to teamPlayers as a team
      localStorage.setItem('teamPlayers', JSON.stringify(team));
      this.yourTeam = team;
    }
  };
  

  // search system
  searchPosition: string = '';
  searchAge: string = '';
  searchName: string = '';
  filteredPlayers: Player[] = [];

  searchPositionChange : EventEmitter<string> = new EventEmitter<string>();
  searchPlayerPosition() {
    if (this.searchPosition.includes('Goalkeeper')) {
      this.pageSize = 10;
    } else{
      this.pageSize = 100;
    }
    this.searchPositionChange.emit(this.searchPosition);
  }

  searchAgeChange : EventEmitter<string> = new EventEmitter<string>();
  searchPlayerAge() {
    if (this.searchAge.includes('18')) {
      this.pageSize = 10;
    } else {
      this.pageSize = 100;
    }
    this.searchAgeChange.emit(this.searchAge)
  }

  searchNameChange : EventEmitter<string> = new EventEmitter<string>();
  searchPlayerName() {
    if (this.searchName.length > 0) {
      this.pageSize = 100;
    } else {
      this.pageSize = 10;
    }
    this.searchNameChange.emit(this.searchName)
  }

}
