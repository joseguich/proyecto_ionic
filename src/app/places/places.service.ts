import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public places: Place[] = [
    {
      id: '1',
      title: 'Pico Duarte',
      imageURL: 'https://i0.wp.com/jibaroenelmundo.com/wp-content/uploads/2019/04/DSCF1022.jpg?fit=1200%2C800&ssl=1',
      comments: ['Pico duarte es lo más alto de RD', 'Muy Hermoso']
    },
    {
      id: '2',
      title: 'Boca Chica',
      imageURL: 'https://res.cloudinary.com/simpleview/image/upload/v1686632112/clients/dominicanrepublic/Boca_chica_playa_85be931b-bbb6-45a7-a83a-c13f216db446.jpg',
      comments: ['Hermosa playa', 'Restaurante dentro de la playa']
    },
  ]

  constructor() { }
  
  //Obtener los lugares.
  getPlaces() {
    //Retornar una copia de todos lo lugares.
    return[...this.places];
  }

  //Obtener un solo lugar.
  getPlace(placeId: string) {
    //Retornara un solo lugar con el ID que le estamos pasando
    return {
      ...this.places.find(place => place.id === placeId)
    }
  }

  //Agregar los lugares.
  addPlaces(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      //Generar el id por la longitud o la cantidad, se le suma uno ya que la longitud actual es dos de esta forma agregar otro id y la comillas para convertirlo en string.
      id: this.places.length + 1 + ""
    })
  }

  //Eliminar los lugares
  deletePlace(placeId: string){
    this.places = this.places.filter(place => place.id !== placeId);
  }
}
