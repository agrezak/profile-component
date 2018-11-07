import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpService } from '../http/http-service.service';
import { Comment, UserProfile } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userProfile$: BehaviorSubject<UserProfile | null> = new BehaviorSubject(null);
  public comments$: BehaviorSubject<Array<Comment | null>> = new BehaviorSubject(null);

  constructor(
    private httpService: HttpService
  ) {}

  public updateUserProfile(userProfile: UserProfile): void {
    this.userProfile$.next(userProfile);
  }

  public updateComments(comments: Array<Comment>): void {
    this.comments$.next(comments);
  }

  public getUserProfile(): Observable<UserProfile> {
    return this.httpService.get('userData');
  }

  public getComments(): Observable<Array<Comment>> {
    return this.httpService.get('comments');
  }

}
