import { Component, OnInit } from '@angular/core';
import { ServiceService } from './Service/video/service.service';
import { ServiceService as CommentServices} from './Service/comment/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private videoService: ServiceService, private commentService: CommentServices){

  }
  ngOnInit(): void {
      this.videoService.getVideos();
      this.commentService.getComments();
  }
  //title = 'testangular';
  test = this.videoService.isLoading
}
