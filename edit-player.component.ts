import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  addplayerForm:FormGroup
  
  id:any;
  findedplayer:any;
  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {

    this.id =this.activatedRouter.snapshot.paramMap.get("id");
    let matches= JSON.parse(localStorage.getItem("players") || "[]");
    this.findedplayer=matches.find((obj)=> {
      return obj.id == this.id;
    }); 
  }
  editplayer(){
  }
}
