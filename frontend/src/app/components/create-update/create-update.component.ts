import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit{
  data: Data = new Data();
  constructor(private dataService:DataService, private router:Router){ }
  ngOnInit(): void {
    this.data = this.dataService.getter() || new Data();
  }
  createOrUpdate(){
    if(this.data._id==undefined){
    this.dataService.createData(this.data).subscribe(
      content=>{
        console.log(content);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }else{
    this.dataService.updateData(this.data).subscribe(
      content=>{
        console.log(content);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }}
}
