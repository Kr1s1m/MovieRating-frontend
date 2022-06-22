import {VoteType} from "./enums/vote-type";

export class VoteDto {
  voteType: VoteType;
  reviewId: number;


  constructor(voteType: VoteType, reviewId: number) {
    this.voteType = voteType;
    this.reviewId = reviewId;
  }
}

