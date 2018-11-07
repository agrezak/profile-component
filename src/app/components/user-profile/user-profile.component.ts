import { Component, OnInit } from '@angular/core';

import { UserService  } from '../../services/user/user-service.service';
import { Comment, UserProfile } from '../../models';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public userProfile: UserProfile;
  public comments: Array<Comment>;
  public areCommentsVisible: boolean = true;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserProfile();
    this.getComments();
  }

  private getUserProfile(): void {
    this.userService.getUserProfile().subscribe((userProfile: UserProfile) => {
      this.userProfile = userProfile;
      this.userService.updateUserProfile(this.userProfile);
    });
  }

  private getComments(): void {
    this.userService.getComments().subscribe((comments: Array<Comment>) => {
      this.comments = comments;
      this.userService.updateComments(this.comments);
    });
  }

  public likeUser(): void {
    const updatedProfile = Object.assign(this.userProfile, {
      isLiked: !this.userProfile.isLiked
    });
    this.userService.updateUserProfile(updatedProfile);
  }

  public followUser(): void {
    const updatedProfile = Object.assign(this.userProfile, {
      isFollowed: !this.userProfile.isFollowed
    });
    this.userService.updateUserProfile(updatedProfile);
  }

  public shareUser(): void {

  }

  public toggleComments(): void {
    this.areCommentsVisible = !this.areCommentsVisible;
  }

}
