export interface UserProfile {
  avatar: string,
  name: string,
  location: string,
  likes: number,
  following: number,
  followers: number,
  isFollowed: boolean,
  isLiked: boolean,
  comments: Array<Comment>
}
