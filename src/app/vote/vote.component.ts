import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../types/review";
import {VoteDto} from "../types/voteDto";
import {VoteService} from "../services/vote.service";
import {TokenStorageService} from "../services/token-storage.service";
import {ReviewService} from "../services/review.service";
import {VoteType} from "../types/enums/vote-type";
import {throwError} from "rxjs";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  @Input()
  //@ts-ignore
  review: Review;

  isLogged = false;

  voteErrorMessage = '';

  constructor(private voteService: VoteService,
              private tokenStorageService: TokenStorageService) {
    this.isLogged = !!this.tokenStorageService.getToken();
  }

  ngOnInit(): void {
  }

  upvoteReview() {
    this.vote(VoteType.Upvote);
  }

  downvoteReview() {
    this.vote(VoteType.Downvote);
  }

  private vote(voteType: VoteType) {
    this.voteService.vote(new VoteDto(voteType, this.review.id)).subscribe(() => {
      this.updateVoteDetails(voteType);
    }, err => {
      this.voteErrorMessage = err.error.message;
      throwError(err);
    });
  }

  private updateVoteDetails(voteType: VoteType) {
    if(voteType == VoteType.Upvote) {
      this.review.voteBalance += 1;
    } else {
      this.review.voteBalance += -1;
    }
  }

}
