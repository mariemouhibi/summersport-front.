import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id: any;
  findedMatch: any;

  constructor(private activatedRouter: ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit() {

    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    this.matchService.getMatchesById(this.id).subscribe((res) => {
      this.findedMatch = res;
    }
    )




    // let matches= JSON.parse(localStorage.getItem("matches") || "[]");
    // this.findedMatch=matches.find((obj)=> {
    //   return obj.id == this.id;

    // });
  }
  editMatch() {
    this.matchService.editMatch(this.findedMatch).subscribe((res) => {
      console.log("here res after edit", res);
    }
    )

  }
}
