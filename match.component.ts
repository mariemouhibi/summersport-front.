import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
@Input() match: any
@Output() newMatch : EventEmitter<any>=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  compare(a: any, b: any) {
    if (Number(a) > Number(b)) {
      return "win" 
    } else if (Number(a) < Number(b)) {
      return "Loss" 

    } else {
      return "Draw "

    }
  }
 passId(id:any){
  console.log("here id child" ,id);
  this.newMatch.emit(id)
 }
}

 
