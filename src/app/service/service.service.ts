import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get("https://5d262f92eeb36400145c59c4.mockapi.io/lancamento/")
  }

  add(lancamento){
    return this.http.post("https://5d262f92eeb36400145c59c4.mockapi.io/lancamento/", lancamento)
  }

  delete(lancamento){
    return this.http.delete("https://5d262f92eeb36400145c59c4.mockapi.io/lancamento/" + lancamento)
  }
}
