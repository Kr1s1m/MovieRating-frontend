import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VoteDto} from "../types/voteDto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private httpClient: HttpClient) { }

  vote(voteDto: VoteDto) {
    return this.httpClient.post<VoteDto>(environment.apiBackendPoint + '/api/v1/vote/', voteDto);
  }
}
