import { Component, OnInit } from '@angular/core';
import {Animal} from "../models/animal";
import {AnimalsService} from "../services/animals.service";

@Component({
  selector: 'app-my-animals',
  templateUrl: './my-animals.component.html',
  styleUrls: ['./my-animals.component.css']
})
export class MyAnimalsComponent implements OnInit {
  animals : Animal[] = new Array<Animal>()
  isLoading : boolean = true;
  constructor(private animalService : AnimalsService, private authService : AuthService) {
    this.animalService.getAnimalsByUser(this.authService.getUser().id).subscribe(
      (resp) =>{
        this.animals = resp
        this.isLoading = false;
      }
    )
  }

  ngOnInit(): void {
  }

}
