import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballersService {
  private jsonUrl = '/assets/footballer-data.json';

  constructor(private http : HttpClient) { }

  getAllFootballer() {  
    return this.http.get(this.jsonUrl)
  }

}
