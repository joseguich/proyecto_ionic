import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.page.html',
  styleUrls: ['./places-detail.page.scss'],
})
export class PlacesDetailPage implements OnInit {
  public iconFlecha = 'arrow-back-circle-outline';

  place!: Place;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
      //redirect.

      if (!paramMap.has('placesId')) {
        console.error('Ruta no encontrada');
        this.router.navigate(['../../places']);
        return;
      }
      const recipeId = paramMap.get('placesId');
      if (typeof recipeId === 'string') {
        this.place = this.placeService.getPlace(recipeId) as Place;
        console.log(this.place);
      }
    });
  }
}
