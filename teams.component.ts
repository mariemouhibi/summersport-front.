import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any;

  constructor(private router:Router) { }
  ngOnInit() 
  {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]")
  }
  goToEdit(id){
    this.router.navigate(["editteam/" + id]);
  }
  
}

