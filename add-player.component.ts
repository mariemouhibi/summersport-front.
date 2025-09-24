import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm: FormGroup
  player:any={}
  constructor(private router:Router) { }

  ngOnInit() {
  }
  addPlayer() {
    let T = JSON.parse(localStorage.getItem("players") || "[]")
    let playerid= JSON.parse(localStorage.getItem("playerid") || "0")
    this.player.id = playerid

    T.push(this.player)
    localStorage.setItem("players", JSON.stringify(T))
    localStorage.setItem("playerid", JSON.stringify(playerid + 1))


    this.router.navigate(['/Players'])
  }
}
