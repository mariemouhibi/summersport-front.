import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  id:any;
  findedteam:any;
  constructor(private activatedRouter : ActivatedRoute) { }

  ngOnInit() {

    this.id =this.activatedRouter.snapshot.paramMap.get("id");
    let matches= JSON.parse(localStorage.getItem("teams") || "[]");
    this.findedteam=matches.find((obj)=> {
      return obj.id == this.id;
    });
  
}
editteam(){
  
}
  }


