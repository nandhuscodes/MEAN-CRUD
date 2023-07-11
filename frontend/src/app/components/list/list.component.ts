import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Data } from 'src/app/data';
import { Router } from '@angular/router';
interface ApiResponse {
  msg: Data[]; // Assuming 'Country' is the correct type for the 'msg' property
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  datas:Data[] = [];
  constructor(private _dataService:DataService, private router:Router){}
  ngOnInit(): void {
      this.readCountries();
  }
  readCountries() {
    this._dataService.readDatas().subscribe(
      (content: Object) => {
        console.log(content);
        const responseData = content as ApiResponse; // Type assertion to ApiResponse
        this.datas = responseData.msg;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  doUpdate(data:any){
    this._dataService.setter(data);
    this.router.navigate(['/createUpdate']);
  }
  doDelete(data:any){
    this._dataService.deleteData(data._id).subscribe(
      (content: any)=>{
        this.datas.splice(this.datas.indexOf(data),1);
      },(error:any)=>{

      }
    )
  }
}
