import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CatalogService } from 'src/app/services/catalog.service';
import { CatalogAutocomplete } from 'src/app/entities/catalog-autocomplete';
import { Constants } from 'src/app/utils/constants';
import { PaisAutocomplete } from 'src/app/entities/pais-autocomplete';

@Component({
  selector: 'tracker-form',
  templateUrl: './tracker-form.component.html',
  styleUrls: ['./tracker-form.component.css']
})
export class TrackerFormComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  //jugador
  equipo = new CatalogAutocomplete(Constants.TABLE_EQUIPO);
  pie = new CatalogAutocomplete(Constants.TABLE_PIE);
  somatotipo = new CatalogAutocomplete(Constants.TABLE_SOMATOTIPO);
  posicion1 = new CatalogAutocomplete(Constants.TABLE_POSICION);
  posicion2 = new CatalogAutocomplete(Constants.TABLE_POSICION);
  paisNacimiento = new PaisAutocomplete();
  paisNacionalidad = new PaisAutocomplete();
  visualizacion = new CatalogAutocomplete(Constants.TABLE_VISUALIZACION);
  seguimiento = new CatalogAutocomplete(Constants.TABLE_SEGUIMIENTO);
  local = new CatalogAutocomplete(Constants.TABLE_EQUIPO);
  visitante = new CatalogAutocomplete(Constants.TABLE_EQUIPO);
  
  jugadorApodo!: string;
  jugadorAnio!: number;
  jugadorNumero!: number;
  jugadorEstatura!: number;

  valFechaPartido: Date = new Date();
  valCampeonato!: string;
  valDescripcion!: string;
  
  constructor(
    private primengConfig: PrimeNGConfig,
    private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  getCatalogService(){
    return this.catalogService;
  }

}
