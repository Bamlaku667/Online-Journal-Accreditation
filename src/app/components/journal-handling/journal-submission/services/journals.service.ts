import { Injectable } from '@angular/core';
import { Journal } from '../journal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalsService {

  constructor(private http: HttpClient) { }

  getJournals() {
    console.log(this.http.get<Journal[]>('/api/journals'))
    return this.http.get<Journal[]>('/api/journals')
  }

  
} 
