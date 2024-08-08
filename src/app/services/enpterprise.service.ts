import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnterpriseDTO } from '../Models/enterprise.dto';

const URL_MOCKS = '../../assets/mocks/'

export interface updateResponse {
  affected: number;
}

export interface deleteResponse {
  affected: number;
}

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EnterpriseDTO[]> {
    console.log ("getALL")
    return this.http
      .get<EnterpriseDTO[]>(`${URL_MOCKS}enterprises.json`)
  }

}
