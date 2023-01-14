import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.images = [
      {
        image: 'assets/goat.png',
        thumbImage: 'assets/goat.png',
        alt: 'goat',
      },
      {
        image: 'assets/goat.png',
        thumbImage: 'assets/goat.png',
        alt: 'goat',
      },
      {
        image: 'assets/goat.png',
        thumbImage: 'assets/goat.png',
        alt: 'goat',
      },
    ];
  }

  ngOnInit(): void {}
}
