
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.page.html',
  styleUrls: ['./places-detail.page.scss'],
})
export class PlacesDetailPage implements OnInit{
  
  public iconFlecha = "arrow-back-circle-outline";

  constructor(private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    const activar = this.activatedRouter.paramMap.subscribe(paramMap => {
      //redirect.
      
      if(!paramMap.has('placesId')){
        console.error('Ruta no encontrada');
        this.router.navigate(['../../places']);
        return;
      }
      const recipeId = paramMap.get('placesId');
        console.log(recipeId);
      
    });

    activar.unsubscribe();
    
  }
}