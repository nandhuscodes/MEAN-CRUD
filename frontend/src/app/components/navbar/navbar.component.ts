import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from 'src/app/shared/data.service';
import { Data } from 'src/app/data';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router: Router, private dataService:DataService) { }
  ngOnInit(): void {
      
  }
  newData(event:any){
    event.preventDefault();
    this.dataService.setter(new Data());
    this.router.navigate(['/createUpdate']);
  }
}
