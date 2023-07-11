import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Data } from '../data';

@Injectable()
export class DataService {
  private data!:Data;
  private baseUri:string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
  createData(data:Data){
    return this.http.post(this.baseUri+'/create',data,{headers:this.headers})
  }
  readDatas(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers})
  }
  updateData(data:Data){
    return this.http.put(this.baseUri+'/update',data,{headers:this.headers})
  }
  deleteData(id:String){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers})
  }
  setter(data:Data){
    this.data = data;
  }
  getter(){
    return this.data;
  }
}
