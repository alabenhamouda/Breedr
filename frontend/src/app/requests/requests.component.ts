import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  incomingRequests = [{from:{name:'a'},to:{name:'b'}},{from:{name:'a'},to:{name:'c'}},{from:{name:'a'},to:{name:'b'}},{from:{name:'a'},to:{name:'b'}}];
  requestsByAnimal : any ;
  myRequests = [];
  myAnimals = [{name:'b'},{name:'c'},{name:'d'}]
  constructor() { }

  ngOnInit(): void {
    this.getRequestsByAnimal();
  }

  getRequestsByAnimal(){
    const groupByAnimal = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
      arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
      }, {} as Record<K, T[]>);

    this.requestsByAnimal = groupByAnimal(this.incomingRequests , i => i.to.name);
  }
  approve(request:any){
    console.log(request)
  }
  decline(request:any){
    console.log(request)
  }

}
