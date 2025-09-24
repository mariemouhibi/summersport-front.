import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm:FormGroup
  team:any={}

  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  addTeam() {
    let T = JSON.parse(localStorage.getItem("teams") || "[]")
    let teamid = JSON.parse(localStorage.getItem("teamid") || "0")
    this.team.id = teamid

    T.push(this.team)
    localStorage.setItem("teams", JSON.stringify(T))
    localStorage.setItem("teamid", JSON.stringify(teamid + 1))


    this.router.navigate(['/Teams'])

}
}