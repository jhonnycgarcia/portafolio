import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  URL = 'https://formspree.io/mwkrdgpp';
  HEADER = new HttpHeaders({ Accept: 'application/json'});

  constructor(private httpClient: HttpClient) {}

  public sendMail(formData: any): Observable<any>{
    return this.httpClient.post(this.URL, formData, { headers: this.HEADER});
  }
}
