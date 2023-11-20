import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public places: Place[] = [
    {
      id: '1',
      title: 'Pico Duarte',
      imageURL:
        'https://i0.wp.com/jibaroenelmundo.com/wp-content/uploads/2019/04/DSCF1022.jpg?fit=1200%2C800&ssl=1',
      comments: [
        'El Pico Duarte, orgullo de la República Dominicana, se alza majestuosamente en la Cordillera Central, marcando el cielo con su cima desafiante a 3,098 metros. Sus laderas están adornadas con bosques nubosos que cobijan una rica biodiversidad, mientras que las aguas cristalinas de sus ríos y arroyos serpentean delicadamente hacia valles verdes y fértiles. Al amanecer, el sol derrama su luz dorada sobre la montaña, revelando caminos serpenteantes que invitan a los aventureros a descubrir sus secretos ocultos entre la neblina matutina y los susurros del viento',

        'En su segunda faceta, el Pico Duarte se erige como un santuario natural, donde el aire puro y el silencio de las alturas ofrecen un refugio espiritual. Desde su cumbre, el espectador puede contemplar un mar de nubes bajo sus pies, mientras que los picos vecinos se perfilan en el horizonte como guardianes de piedra y verdor. Los atardeceres son un lienzo de colores vibrantes, pintando el cielo con tonalidades de naranja, rosa y púrpura, mientras las estrellas comienzan a titilar en el firmamento, prometiendo una noche de paz y estrellas fugaces.',
      ],
    },

    {
      id: '2',
      title: 'Boca Chica',
      imageURL:
        'https://res.cloudinary.com/simpleview/image/upload/v1686632112/clients/dominicanrepublic/Boca_chica_playa_85be931b-bbb6-45a7-a83a-c13f216db446.jpg',
      comments: [
        'Boca Chica es una encantadora localidad costera en la República Dominicana, conocida por su vibrante atmósfera y su extensa playa de aguas tranquilas y cristalinas. La arena blanca y suave invita a largas caminatas a orillas del mar Caribe, mientras las palmeras se mecen al ritmo de una brisa suave, ofreciendo sombra refrescante a los visitantes. Es un destino perfecto para quienes buscan relajarse bajo el sol tropical y disfrutar de la hospitalidad cálida de la cultura dominicana.',

        'Además, Boca Chica es famosa por su espectacular arrecife de coral, que forma una barrera natural y crea una piscina natural gigante, ideal para el baño y el snorkel. La vida marina es rica y variada, lo que atrae a buceadores y amantes de la naturaleza de todo el mundo. Cuando el sol comienza a ponerse, el cielo se tiñe de tonos rosados y naranjas, ofreciendo un espectáculo impresionante mientras la vida nocturna comienza a vibrar con música, baile y la deliciosa gastronomía local en los numerosos restaurantes y bares a lo largo de la costa.',
      ],
    },
  ];

  constructor() {}

  //Obtener los lugares.
  getPlaces() {
    //Retornar una copia de todos lo lugares.
    return [...this.places];
  }

  //Obtener un solo lugar.
  getPlace(placeId: string) {
    //Retornara un solo lugar con el ID que le estamos pasando
    return {
      ...this.places.find((place) => place.id === placeId),
    };
  }

  //Agregar los lugares.
  addPlaces(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      //Generar el id por la longitud o la cantidad, se le suma uno ya que la longitud actual es dos de esta forma agregar otro id y la comillas para convertirlo en string.
      id: this.places.length + 1 + '',
    });
  }

  //Eliminar los lugares
  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => place.id !== placeId);
  }
}
