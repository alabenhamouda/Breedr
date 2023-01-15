import { AnimalsService } from './../services/animals.service';
import { Animal } from './../models/animal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css'],
})
export class AnimalDetailsComponent implements OnInit {
  images: Array<object>;
  imageSize = {
    width: '100%',
    height: '500px',
  };
  animal: Animal;

  constructor(
    private animalsService: AnimalsService,
    private route: ActivatedRoute
  ) {
    this.images = [
      {
        image: 'assets/blank_image.jpg',
        thumbImage: 'assets/blank_image.jpg',
        alt: 'goat',
      },
    ];
    this.animal = new Animal();

    route.params.subscribe((params) => {
      const id: string = params['id'];
      this.loadAnimal(id);
    });
  }

  loadAnimal(id: string) {
    this.animalsService.getAnimalWithImages(id).subscribe((animal) => {
      console.log(animal);
      this.animal = animal;
      this.images = this.getImages();
      console.log(this.images);
    });
  }

  getImages() {
    if (
      this.animal.images.length > 0 &&
      this.animal.images.every((image) => typeof image === 'string')
    ) {
      return this.animal.images.map((image) => ({
        image: image,
        thumbImage: image,
        alt: 'animal image',
      }));
    } else {
      return [
        {
          image: 'assets/blank_image.jpg',
          thumbImage: 'assets/blank_image.jpg',
          alt: 'animal image',
        },
      ];
    }
  }

  ngOnInit(): void {}
}
