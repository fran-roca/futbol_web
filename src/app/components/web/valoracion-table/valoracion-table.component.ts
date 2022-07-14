import { Component, Input, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { InformeService } from 'src/app/services/informe.service';
import { Valoracion } from 'src/app/entities/valoracion';
import { ValoracionService } from 'src/app/services/valoracion.service';
import { Jugador } from 'src/app/entities/jugador';

@Component({
  selector: 'valoracion-table',
  templateUrl: './valoracion-table.component.html',
  styleUrls: ['./valoracion-table.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ValoracionTableComponent implements OnInit {

  @Input('jugador')
  jugador!: Jugador;
  @Input('loadFormSubject') 
  loadFormSubject: any;

  valDialog!: boolean;
  valoraciones!: Valoracion[];
  selectedValoraciones!: Valoracion[];

  displayModal!: boolean;
  pdfSrc!: any;
  tempRetFileData!: any;



  constructor(private informeService: InformeService,
              private valoracionService: ValoracionService,
              private messageService: MessageService, 
              private confirmationService: ConfirmationService) { 
                
    this.loadFormSubject = new Subject<boolean>();
  }

  ngOnInit(): void {
    this.loadFormSubject.subscribe((response: any) => {
    if(response){
        console.log('loadValoraciones')
        this.loadValoraciones();
      }
    })
  }

  async loadValoraciones(){
    (await (this.valoracionService.getValoracion([], this.jugador.id_jugador))).subscribe({
      next: (response: any) => {
        this.valoraciones = response.valoraciones;
        
      },
      error: (err: any) => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Error cargando valoraciones', life: 3000});
        
      },
      complete: () => {
        console.log('completed getValoracion');
      },
    });
  }


  deleteSelectedValoraciones() {
    this.confirmationService.confirm({
        message: '¿Está seguro que quiere borrar las valoraciones seleccionadas?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //this.products = this.products.filter(val => !this.selectedProducts.includes(val));
            //this.selectedProducts = null;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        }
    });
  }

  /*exportSelectedProducts(){
    this.valoraciones = this.valoraciones.filter(val => !this.selectedValoraciones.includes(val));
  }*/

  async exportInforme(){
    let tempBlob = null;
    console.log('exportInforme ');

    (await (this.informeService.getInforme(this.jugador.id_jugador))).subscribe({
      next: (res: any) => {  
        console.log('Ok exportInformae')
        console.log(res)
 
        tempBlob = new Blob([res], { type: 'application/pdf' });
        this.pdfSrc = window.URL.createObjectURL(tempBlob)


        /*this.tempBlob = new Blob([res], { type: 'application/pdf;charset=utf-8;' });
        this.pdfSrc = window.URL.createObjectURL(this.tempBlob)
        var link = document.createElement('a');
        link.href = this.pdfSrc;
        link.download = "help.pdf";
        link.click();*/
        this.displayModal = true;
        
      },
      error: (res: any) => {
        console.log(res)
      },
      complete: () => {
        //this.displayModal = true;
      },
    });
  }

  downloadPDF(){
    var link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = this.jugador.nombre+Date.now()+".pdf";
    link.click();
  }

}
