import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'tracker-form',
  templateUrl: './tracker-form.component.html',
  styleUrls: ['./tracker-form.component.css']
})
export class TrackerFormComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  selectedPie: any;
  countries: any;
  filteredCountries: any;
  selectedCountryAdvanced: any;

  jugadorNumero!: number;
  jugadorAnio!: number;
  jugadorApodo!: string;

  valoracionFechaPartido: Date = new Date();
  
  constructor(
    private primengConfig: PrimeNGConfig,
    private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.catalogService.getCountries().then(countries => {
      this.countries = countries;
      console.log(countries)
    });
  }

  filterCountry(event: any) {
    let query = event.query;

    this.catalogService.getCountries().then(countries => {
      this.filteredCountries = countries;
      console.log(countries)
    });
  }

}
