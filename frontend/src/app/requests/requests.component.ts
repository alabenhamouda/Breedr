import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../services/requests.service";
import {Request} from "../models/request";
import {Animal} from "../models/animal";
import {AnimalsService} from "../services/animals.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  incomingRequests: Request[] = [];
  myAnimals :Animal[]=[];
  requestsByAnimal : any ;
  myRequests = [];
  user :any;
  userId: string ='';
  constructor(private requestsService : RequestsService,
              private animalsService : AnimalsService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.userId = this.user.id;
    this.animalsService.getAnimals(this.userId,true,true).subscribe(x=>{
      this.myAnimals = x;

    });

    this.requestsService.getBreedingRequests().subscribe((requests)=>{
      this.incomingRequests = requests;
      this.getRequestsByAnimal();
      console.log(this.requestsByAnimal)

    })
  }

  getRequestsByAnimal(){
    const groupByAnimal = <T, K extends keyof any>(arr: T[], key: (i: T ) => K) =>
      arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
      }, {} as Record<K, T[]>);

    this.requestsByAnimal = groupByAnimal(this.incomingRequests , i =>  (i.to?.id ? i.to.id : '') );
  }
  approve(request:any){
    console.log(request)
  }
  decline(request:any){
    console.log(request)
  }

}
