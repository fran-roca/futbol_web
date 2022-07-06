import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

import { CatalogAutocomplete } from 'src/app/entities/catalog-autocomplete';
import { Constants } from 'src/app/utils/constants';
import { JugadorAutocomplete } from 'src/app/entities/jugador-autocomplete';
import { PaisAutocomplete } from 'src/app/entities/pais-autocomplete';

import { CatalogService } from 'src/app/services/catalog.service';
import { JugadorService } from 'src/app/services/jugador.service';
import { Jugador } from 'src/app/entities/jugador';
import { NONE_TYPE } from '@angular/compiler';
import { Catalog } from 'src/app/entities/catalog';
import { Pais } from 'src/app/entities/pais';

@Component({
  selector: 'tracker-form',
  templateUrl: './tracker-form.component.html',
  styleUrls: ['./tracker-form.component.css'],
  providers: [MessageService]
})
export class TrackerFormComponent implements OnInit {
  
  currentYear: number = new Date().getFullYear();

  //jugador

  jugador = new JugadorAutocomplete();
  equipo = new CatalogAutocomplete(Constants.TABLE_EQUIPO);
  pie = new CatalogAutocomplete(Constants.TABLE_PIE);
  somatotipo = new CatalogAutocomplete(Constants.TABLE_SOMATOTIPO);
  posicion1 = new CatalogAutocomplete(Constants.TABLE_POSICION);
  posicion2 = new CatalogAutocomplete(Constants.TABLE_POSICION);  
  perfil = new CatalogAutocomplete(Constants.TABLE_PERFIL);
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

  valScout!: string;
  valFechaPartido: Date = new Date();
  valCampeonato!: string;
  valDescripcion!: string;
  
  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private catalogService: CatalogService,
    private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.perfil.filter(this.catalogService, '');
  }

  getCatalogService(){
    return this.catalogService;
  }

  getJugadorService(){
    return this.jugadorService;
  }

  async loadJugadorInfo(){
    (await this.jugadorService.getJugadorById(this.jugador.selected.id_jugador)).subscribe({
      next: (response: any) => {
        this.jugadorApodo = response.apodo;
        this.jugadorAnio = response.anio;
        this.equipo.selected = new Catalog(response.id_equipo, response.des_equipo)
        this.jugadorNumero = response.numero;
        this.pie.selected = new Catalog(response.id_pie, response.des_pie)
        this.somatotipo.selected = new Catalog(response.id_somatotipo, response.des_somatotipo)
        this.jugadorEstatura = response.estatura;
        this.paisNacimiento.selected = new Pais(response.id_pais, response.nombre_pais)
        this.paisNacionalidad.selected = new Pais(response.id_pais_nacionalidad, response.nombre_nacionalidad)
        this.posicion1.selected = new Catalog(response.id_posicion1, response.des_posicion1)
        this.posicion2.selected = new Catalog(response.id_posicion2, response.des_posicion2)
      },
      error: (err: any) => {
        console.log(err);
        this.messageService.add({severity:"error", summary:'Error', detail:'Error cargando el jugador'});
      },
    });
  }

  async save() {
    console.log('save')
    let newJugador = new Jugador(0, this.jugador.selected, this.jugadorApodo, this.jugadorAnio, this.equipo.selected?.id, this.jugadorNumero,
    this.pie.selected?.id, this.somatotipo.selected?.id, this.jugadorEstatura, this.paisNacimiento.selected?.id, 
    this.paisNacionalidad.selected?.id, this.posicion1.selected?.id, this.posicion2.selected?.id);
    
    
    
    (await (this.jugadorService.postJugador(newJugador))).subscribe({
      next: (response: any) => {
        this.jugador.selected = {'id_jugador': response.id_jugador, 'nombre': response.nombre}
        this.messageService.add({severity:"success", summary:'Success', detail:'Nuevo jugador guardado'});
        
      },
      error: (err: any) => {
        console.log(err);
        this.messageService.add({severity:"error", summary:'Error', detail:'Error al guardar el jugador'});
        
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  update(){
    console.log(this.jugador.selected)
    this.messageService.add({severity:"success", summary:'Success', detail:'El jugador ha sido editado'});
  }

  isJugador(){
    return this.jugador.selected instanceof Object
  }
}
