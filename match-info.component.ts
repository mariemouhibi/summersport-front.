import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
id:any;
findedMatch:any;
  constructor(
    private matchService:MatchService,
    private activatedRout:ActivatedRoute  ) { }

  ngOnInit() {
    this.id=this.activatedRout.snapshot.paramMap.get("id");
    this.matchService.getMatchesById(this.id).subscribe((res)=>{
      this.findedMatch=res;
    }
    )  }

}
