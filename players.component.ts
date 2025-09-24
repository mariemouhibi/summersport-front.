import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any;

  constructor(private router: Router) { }

  ngOnInit() {

    this.players = JSON.parse(localStorage.getItem("players") || "[]")

  }
  goToEdit(id){
    this.router.navigate(["editplayer/" + id]);

  }
}
