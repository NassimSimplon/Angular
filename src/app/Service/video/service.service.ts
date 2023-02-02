import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VIDEOS_PATH } from 'src/app/Utils/ApiUrls';
import { VIDEO } from 'src/app/Utils/interfaces';
@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnInit {
  videosData: Array<VIDEO> = [];
  isLoading: any;
  constructor(private http: HttpClient) {}
  //@GET
  getVideos() {
    return this.http.get<Object[]>(`${VIDEOS_PATH}`).subscribe({
      next: (val: any) => {
        this.videosData = val;
        console.log(this.isLoading);
      },
      error: (e: any) => console.error('Error:', e),
      complete: () => {
        console.info('complete');
      },
    });
  }
  //@DELETE
  deleteVideos(id: any) {
    return this.http.delete<Object>(`${VIDEOS_PATH}/${id}`).subscribe({
      next: (val: any) => {
        this.getVideos();
        console.log(val, 'Delete Video Successfuly');
      },
      error: (e: any) => console.error('Error:', e),
      complete: () => {
        console.info('complete');
      },
    });
  }
  ngOnInit(): void {
    this.videosData;
  }
}
