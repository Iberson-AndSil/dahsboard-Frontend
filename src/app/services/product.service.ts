import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  // Método HTTP para obtener datos
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos`);
  }

  // Método HTTP para enviar datos
  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/endpoint`, data);
  }
}
