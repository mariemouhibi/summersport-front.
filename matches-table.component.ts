import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matchestab: any=[];

  constructor(private router: Router ,
    private matchService:MatchService) { }

  ngOnInit() {

    // this.matchestab = JSON.parse(localStorage.getItem("matches") || "[]");
    this.matchService.getAllMatches().subscribe(
      (res)=>{
        this.matchestab=res;
      }
    )
  }
  goToEdit(id) {
    this.router.navigate(["editMatch/" + id]);
  }
  deleteMatch(id){
    this.matchService.deleteMatchById(id).subscribe((res)=>{
      console.log("here res after delete",res);
    }
    )
  }
}

