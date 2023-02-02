import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/video/service.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  //State
  videoData:any;
  constructor(private vidioService:ServiceService) {
    
  }
  //@GEt
  getAllVideos(){
    this.vidioService.getVideos();
    this.videoData = this.vidioService.videosData;
  }
  //@Delete
  deleteOne(id:any) {
    this.vidioService.deleteVideos(id);
    this.videoData = [];
  }
  ngOnInit(): void {
     this.getAllVideos();
  }

}
