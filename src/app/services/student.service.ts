import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Student {
  id: string;
  nama: string;
  adress: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost/CRUD_api/api/students'
  constructor(private http: HttpClient) {}

  getAll(){
      return this.http.get<[Student]>(this.url);
  }

  get(id: string){
      return this.http.get<Student>(this.url + '/' + id);

  }

  create(student: Student) {
      return this.http.post(this.url, student);
  }

  update(student: Student, id: string){
      return this.http.put(this.url + '/' + id, student);
  }

  remove(id: string) {
      return this.http.delete(this.url + '/' + id);

  }
}
