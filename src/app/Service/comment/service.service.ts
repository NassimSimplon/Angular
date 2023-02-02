import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { COMMENTS_PATH } from 'src/app/Utils/ApiUrls';
import { COMMENT } from 'src/app/Utils/interfaces';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  //STATE
  commentsData: Array<COMMENT> = [];

  constructor(private http: HttpClient) {}
   //@GET
   getComments() {
    return this.http.get<any[]>(`${COMMENTS_PATH}`).subscribe({
      next: (val: any) => {
     return   this.commentsData = val;
      },
      error: (e: any) => console.error('Error:', e),
      complete: () => {
        console.info('complete');
      },
    });
  }
    //@DELETE
    deleteComment(id: any) {
      return this.http.delete<any>(`${COMMENTS_PATH}/${id}`).subscribe({
        next: (val: any) => {
          this.getComments();
          console.log(val, 'Delete Comment Successfuly');
        },
        error: (e: any) => console.error('Error:', e),
        complete: () => {
          console.info('complete');
        },
      });
    }

    //@PUT
    updateComment(item: any) {

      return this.http.put<any>(`${COMMENTS_PATH}/${item.id}`,{...item}).subscribe({
        next: (val: any) => { 
          console.log(val, 'Update Comment Successfuly');
          console.log(this.commentsData,'serv')
        return  this.getComments();
         
        
        },
        error: (e: any) => console.error('Error:', e),
        complete: () => {
          console.info('complete');
        },
      });
    }
}
