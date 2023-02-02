import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/video/service.service';
import { ServiceService as CommentServices } from 'src/app/Service/comment/service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-single-video-ui',
  templateUrl: './single-video-ui.component.html',
  styleUrls: ['./single-video-ui.component.css'],
})
export class SingleVideoUIComponent implements OnInit {
  //Variabels
  id = '';
  comments: any;
  videoData: any;
  toggleInput:Boolean=false;
  newComment:any;
  constructor(
    private router: ActivatedRoute,
    private videoService: ServiceService,
    private commentService: CommentServices
  ) {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  showComments(){
    this.comments = this.commentService.commentsData.filter(
      (x: any) => x.vID == this.id
    );
    
  }
  ngOnInit(): void {
    this.videoData = this.videoService.videosData.filter(
      (x: any) => x.id == this.id
    );
    this.showComments()
 
  }
  //Functions
  deleteOne() {
    this.videoService.deleteVideos(this.id);
    this.videoData = [];
  }
  deleteOneComment(id:any){
    this.commentService.deleteComment(id);
    this.comments.length = 0;
  }

  isOpen(){
   if(this.toggleInput){
    this.toggleInput = false;
   }else{
    this.toggleInput = true;
   }
  }
  //Form 
  updateTheComment(f:NgForm,i:any){
    
    this.commentService.updateComment({
      id:i.id,
      body:f?.value?.body,  
      CreatedAt:i.CreatedAt,
      vID: i.vID  
    })
 return this.toggleInput = false;
 
   }
}
