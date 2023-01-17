import { APINames } from './../constants/api-names';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Animal } from '../models/animal';
import {Constants} from "../constants/Constants";

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  getAnimals(userId:string,
                     shouldBringImages: boolean,
                     shouldEncodeImages: boolean): Observable<Animal[]> {
    const url = `${Constants.API_URL}/animals/`;
    return this.http.get<Animal[]>(url, {
      params: { userId ,shouldBringImages },
    });
  }

  getAnimal(
    id: string,
    shouldBringImages: boolean,
    shouldEncodeImages: boolean
  ): Observable<Animal> {
    const url = `${APINames.ANIMALS}/${id}`;
    return this.http.get<Animal>(url, {
      params: { shouldBringImages, shouldEncodeImages },
    });
  }

  getAnimalWithImages(id: string): Observable<Animal> {
    const shouldBringImages = true;
    const shouldEncodeImages = true;
    return this.getAnimal(id, shouldBringImages, shouldEncodeImages);
  }
}
