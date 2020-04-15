import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl+"/?format=json");
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}/?format=json`);
  }

  create(data) {
    return this.http.post(baseUrl+"/", data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}/`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}/`);
  }

}
