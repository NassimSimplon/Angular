import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/video/service.service';
import { VIDEO } from 'src/app/Utils/interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  videoArray!: Array<VIDEO>;
  constructor(public videoServices:ServiceService,private router:Router){
    
  }
  ngOnInit(): void {
      this.videoArray = this.videoServices.videosData.filter((x)=> x.visibility === 'public')
  }
  switchSingleUIvideo(id:any){
    this.router.navigate(['/singleVideoUI/'+ id]);
  }

}
